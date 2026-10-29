"""Package only the public static files, excluding notes and development tools."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import argparse
import subprocess
import sys

root = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('output', type=Path)
args = parser.parse_args()
subprocess.run([sys.executable, str(root / 'tools/check_site.py')], check=True)
public = [root / name for name in ('index.html', 'about.html', 'after-hours.html', 'work.html', 'research.html', 'writing.html', 'style.css', 'site.js', 'robots.txt', 'sitemap.xml', '.nojekyll')]
public.extend(path for path in (root / 'assets').rglob('*') if path.is_file())
with ZipFile(args.output.resolve(), 'w', ZIP_DEFLATED) as archive:
    for path in sorted(public):
        archive.write(path, path.relative_to(root))
print(f'Packaged {len(public)} public files: {args.output.resolve()}')
