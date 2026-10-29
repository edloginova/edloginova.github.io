"""Check the static release's links, assets and basic page structure."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import re
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
PAGES = ('index.html', 'work.html', 'research.html', 'writing.html', 'after-hours.html', 'about.html')

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path, self.ids, self.references, self.problems = path, set(), [], []
        self.headings = 0
        self.feed(path.read_text(encoding='utf-8'))

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if 'id' in attrs:
            if attrs['id'] in self.ids:
                self.problems.append(f'duplicate id: {attrs["id"]}')
            self.ids.add(attrs['id'])
        self.headings += tag == 'h1'
        for key in ('href', 'src', 'aria-controls'):
            if key in attrs:
                self.references.append(('#' if key == 'aria-controls' else '') + attrs[key])
        if 'srcset' in attrs:
            self.references.extend(item.strip().split()[0] for item in attrs['srcset'].split(','))
        if tag == 'img' and 'alt' not in attrs:
            self.problems.append('image without an alt attribute')
        if tag == 'a' and attrs.get('target') == '_blank' and 'noopener' not in attrs.get('rel', ''):
            self.problems.append('new-tab link without noopener')

pages = {name: Page(ROOT / name) for name in PAGES}
errors = []
external = set()
for name, page in pages.items():
    errors.extend(f'{name}: {problem}' for problem in page.problems)
    if page.headings != 1:
        errors.append(f'{name}: expected one h1, got {page.headings}')
    for reference in page.references:
        url = urlsplit(reference)
        if url.scheme or url.netloc:
            if url.scheme in ('http', 'https'):
                external.add(reference)
            continue
        target = unquote(url.path) or name
        path = (ROOT / target).resolve()
        if not path.is_relative_to(ROOT) or not path.is_file():
            errors.append(f'{name}: missing local file: {reference}')
        elif url.fragment and (target not in pages or unquote(url.fragment) not in pages[target].ids):
            errors.append(f'{name}: missing fragment: {reference}')

css = (ROOT / 'style.css').read_text(encoding='utf-8')
for match in re.finditer(r'url\(\s*(?:"([^"]*)"|\'([^\']*)\'|([^)]*))\s*\)', css):
    value = next(group for group in match.groups() if group is not None).strip()
    if not urlsplit(value).scheme and not (ROOT / value).is_file():
        errors.append(f'style.css: missing asset: {value}')
if '@media(prefers-reduced-motion:reduce)' not in css:
    errors.append('missing reduced-motion rule')
if not (ROOT / '.nojekyll').exists():
    errors.append('missing .nojekyll')
ET.parse(ROOT / 'sitemap.xml')
if errors:
    raise SystemExit('\n'.join(errors))
print(f'PASS: {len(pages)} pages; local files, anchors, srcsets, image alt attributes, menu controls and sitemap checked.')
print('Reduced-motion CSS present. External HTTP links require separate live verification:')
print('\n'.join(sorted(external)))
