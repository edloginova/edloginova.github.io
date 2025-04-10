/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kate Loginova",
  title: "Hey, I'm Kate!",
  subTitle: emoji(
    "NLP developer & researcher"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1GGG_8RVnpRKNbfyWPJqOaFZD7lE2tGxC/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/edloginova",
  linkedin: "https://www.linkedin.com/in/edloginova/",
  gmail: "ekaterina.d.loginova@gmail.com",
  // facebook: "https://www.facebook.com/jekaterina.ld/",
  medium: "https://medium.com/@edloginova",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "USING NATURAL LANGUAGE PROCESSING FOR SOCIAL GOOD",
  skills: [
    emoji(
      "⚡ Building AI products for healthcare, security & legal domains"
    ),
    emoji("⚡ R&D support for journalists and activists to defend freedom of speech & liberal values"),
    emoji(
      "⚡ Research into personalised learning: making education more fun and accessible"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fa fa-python"
    },
    {
      skillName: "natural language processing (NLP)",
      fontAwesomeClassname: "fa fa-language"
    },
    {
      skillName: "machine learning (ML)",
      fontAwesomeClassname: "fa fa-robot"
    },
    {
      skillName: "large language models (LLM)",
      fontAwesomeClassname: "fa fa-comment-nodes"
    },
    {
      skillName: "Google Cloud Platform (GCP)",
      fontAwesomeClassname: "fa fa-google"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fa fa-docker"
    },
    
    {
      skillName: "NLTK, spaCy, Gensim, Pattern",
      fontAwesomeClassname: "fa fa-spell-check"
    },
    
    {
      skillName: "Flask, CSS, HTML, JS",
      fontAwesomeClassname: "fa fa-code"
    },
    
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ghent University",
      logo: require("./assets/images/logo_ghent.png"),
      subHeader: "PhD on NLP for personalised education",
      duration: "August 2018 - November 2022",
      desc: "#1 in Belgium, #74 in the world",
      descBullets: [
        "Educational data mining: structured and semantic representations with natural language processing and deep learning for personalised language and mathematics learning. Student academic performance prediction & question difficulty estimation.",
        "Published in peer-reviewed international journals: Machine Learning, Information Systems Frontiers & presented my research at top NLP and EDM conferences: EMNLP, BEA NLP, RANLP, ICDMW, EDM, ADBIS.",
        "See dissertation: https://biblio.ugent.be/publication/8769989",
        "Organised collaborations with industrial and international academic partners.",
        "Teaching assistant for the Master degree courses Statistical Modelling and Data Mining, Bayesian Statistics. Built a web-tool to assist automated Latex report compilation. ",
        "Academic outreach: participated in university-wide pitch competitions and knowledge sharing sessions.",
        "Participated in a summer school Bayesian Deep Learning and workshops on public speaking for research."
      ]
    },
    {
      schoolName: "KU Leuven",
      logo: require("./assets/images/logo_kuleuven.png"),
      subHeader: "Advanced Master in Artificial Intelligence",
      duration: "October 2016 - June 2017",
      desc: "#42 in the world",
      descBullets: ["Cum laude.", 
        "Speech and Language Technology option.",
        "Thesis on sentiment analysis for opinion mining.", 
        "Courses: Machine Learning, Natural Language Processing, Artificial Neural Networks, Support Vector Machines, Language Engineering Applications, Speech Recognition, Prolog."]
        
    },
    {
      schoolName: "National Research University Higher School of Economics",
      logo: require("./assets/images/logo_hse.png"),
      subHeader: "Bachelor of Science in Applied Mathematics and Computer Science",
      duration: "September 2011 - June 2015",
      desc: "#3 in Russia",
      descBullets: ['Grade: 8.1 / 10', 'Activities and societies: The State Academic Scholarship for high academic achievements.Activities and societies: The State Academic Scholarship for high academic achievements.', 'One of the top 5 universities in Russia. Computer Science Faculty, Department of Applied Mathematics and Information Science.', 'More information about my faculty: cs.hse.ru/en.', 'Courses included Algorithms and Data Structures, Data Analysis, Database Theory, Automatic Text Processing, Statistical Simulation and Analysis, Predictive Modeling, Applied Graph Theory, Theory of Decision Making, Probability Theory and Mathematical Statistics, Calculus, Linear Algebra, Numerical Methods, Game Theory.', 'Thesis on Information Extraction from news (rule-based).']
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "NLP", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Research",
      progressPercentage: "80%"
    },
    {
      Stack: "Python",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Natural Language Processing and Machine Learning Engineer",
      company: "Dedalus",
      companylogo: require("./assets/images/logo_dedalus.png"),
      date: "October 2022 – present",
      desc: "AI for healthcare applications. NLP library for internal research & development. #2 code contributor in a team of 14.",
      descBullets: ['trained models & implemented pipelines for clinical named entity recognition, negation detection & relationship extraction (multilingual).', 'improved latency & throughput of all components, with up to x8 wins in processing speed', 'devised the relation extraction approach that improved performance x2', 'incorporated LLMs into labelling, creating new training and evaluation datasets + lowering cost and time', 'implemented deep learning approach for negation detection, improving the classification performance and ease of maintenance', 'migrated the entire ecosystem to Triton', 'designed and implemented a massive refactoring of the NLP pipeline, introducing configuration-based development to facilitate reproducibility of research experiments and easier labelling/training/evaluation worfklow, as well as more straightforward file sharing', 'restructured and updated sharing of artifacts, making it noticeably easier to keep track of the experimental data and drastically increasing the transparency', 'implemented multiple new components: structured info processor, evaluation PDF reports for external stakeholders', 'extended and improved rule-based algorithms, making them more flexible and context-aware', 'provided research support in production performance analysis on customer logs', 'streamlined & automated model evaluation', 'prepared and coordinated first full-scale verification', 'organised knowledge sharing sessions and mentored TUM Master thesis student on using LLMs, resulting in succesful thesis defence', 'assisted data scientists in transferring their code into production environment, ensuring code quality standards', 'advocated use of new tools and pitched them to the managament']
    },
    {
      role: "Senior NLP Engineer",
      company: "Faktion",
      companylogo: require("./assets/images/logo_faktion.png"),
      date: "March 2021 – September 2022",
      desc: "AI consultancy.",
      descBullets: ['Semantic search, topic modelling, word sense disambiguation, query expansion and correction & text classification. (Dutch, government documents). Collected feedback from users, carried out research and development, implemented a demo frontend, maintained the backend, prepared microservices API which were incorporated into an analytics platform.',
        'Text quality assessment: readability, fluency, coherence. (English, legal documents.) Research and development.',
        'Knowledge sharing sessions on Bayesian deep learning and graph deep learning.'

      ]
    },
    {
      role: "Researcher",
      company: "Deutsches Forschungszentrum für Künstliche Intelligenz (DFKI)",
      companylogo: require("./assets/images/logo_dfki.png"),
      date: "October 2017 – August 2018",
      desc: "Deep Learning for Question Answering (Deeplee).",
      descBullets: ['3 publications (EMNLP 2018, CALC 2018, Information Systems Frontiers)',
        'implemented neural networks for multilingual non-factoid question answering (LSTM, CNN with Keras, PyTorch)',
        'developed an interactive online demo to visualize attention and inner workings of LSTM',
        'gave a lecture on multilingual question answering and LSTMs visualization within a Master level seminar "Current Topics in Information Extraction and Question Answering" in Saarland University',
        'delivered several presentations on the recent developments in the question answering field'
      ]
    },
    {
      role: "Intern Researcher",
      company: "Vrije Universiteit Brussel (VUB)",
      companylogo: require("./assets/images/logo_vub.png"),
      date: "February 2017 – June 2017",
      desc: "Master thesis interneship at VUB Artificial Intelligence lab.",
      descBullets: ['organized corpus annotation for sentiment analysis (comments to "The Guardian" articles on climate change)',
        'compared existing sentiment analysis tools (Stanford CoreNLP, Vader, Pattern, Polyglot)',
        'extracted linguistic features and analysed their influence',
        'trained machine learning models (Support Vector Machines, Maximum Entropy, Naive Bayes)'
      ]
    },
    {
      role: "Tutor",
      company: "Uchido",
      companylogo: require("./assets/images/logo_uchido.webp"),
      date: "April 2013 – present",
      desc: "Teaching math to middle- and high-school students, as well as linear algebra, calculus, statistics and differential equations to university students. Also tutored bachelor students on Python and machine learning."
    },
    {
      role: "Teaching Assistant",
      company: "National Research University Higher School of Economics",
      companylogo: require("./assets/images/logo_hse.png"),
      date: "April 2015 – July 2015",
      desc: "The course “Social Network Analysis”. Responsibilities included: compiling a list of resources, preparing handouts for exercise sessions in R, checking solutions, solving and explaining problems on graph analysis with the use of software for creating a graph of connections extracted from the social network account."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME NGOs AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo_agentstvo.png"),
      projectName: "Agents Media",
      projectDesc: "an LLM-based advanced spell-checker Telegram bot for journalists",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.agents.media/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logo_tst.png"),
      projectName: "Teplitsa",
      projectDesc: "Chatbots for fact-checking and manipulation detection in media; in-house analysis; algorithms for troll detection in comments.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://te-st.org/about-en/"
        }
      ]
    },
    {
      image: require("./assets/images/logo_rebels.png"),
      projectName: "Rebels AI",
      projectDesc: "NLP consultancy for educational & GenAI projects",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://rebels.ai/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆 "),
  subtitle:
    "Courses, competitions, etc.",

  achievementsCards: [
    {
      title: "Introduction to Machine Learning in Production",
      subtitle:
        "DeepLearning.AI specialisation",
      image: require("./assets/images/logo_deeplearningai.png"),
      imageAlt: "Coursera",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/XVPRVFQEW3XA"
        }
      ]
    },
    {
      title: "TensorFlow Developer",
      subtitle:
        "DeepLearning.AI specialisation",
      image: require("./assets/images/logo_deeplearningai.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/professional-cert/8X4QRTDR3F9G"
        }
      ]
    },
    {
      title: "Kaggle",
      subtitle:
        "Top 19% Jigsaw Toxic Comment Classification Challenge",
      image: require("./assets/images/logo_kaggle.png"),
      imageAlt: "Kaggle",
      footerLink: [
        {
          name: "Leaderboard",
          url: "https://www.kaggle.com/edloginova/competitions"
        }
      ]
    },
  
    {
      title: "Demhack 7",
      subtitle:
        "winner",
      image: require("./assets/images/logo_demhack.png"),
      imageAlt: "Demhack 7",
      footerLink: [
        {
          name: "Hackathon website",
          url: "https://7.demhack.org/"
        }
      ]
    },
    {
      title: "Probabilistic Graphical Models",
      subtitle:
        "Stanford University",
      image: require("./assets/images/logo_stanford.webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/2W2228TR5D5J"
        }
      ]
    },
    
    {
      title: "Machine Learning",
      subtitle:
        "Stanford University",
      image: require("./assets/images/logo_stanford.webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/api/legacyCertificates.v1/spark/statementOfAccomplishment/972303~2742932/pdf"
        }
      ]
    },
    
    {
      title: "Automata",
      subtitle:
        "Stanford University",
      image: require("./assets/images/logo_stanford.webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/api/legacyCertificates.v1/spark/statementOfAccomplishment/972892~2742932/pdf"
        }
      ]
    },
    {
      title: "The Data Scientist’s Toolbox",
      subtitle:
        "Johns Hopkins University",
      image: require("./assets/images/logo_jhu.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Course",
          url: "https://www.coursera.org/learn/datascitoolbox"
        }
      ]
    },
    {
      title: "Practical Machine Learning",
      subtitle:
        "Johns Hopkins University",
      image: require("./assets/images/logo_jhu.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Course",
          url: "https://www.coursera.org/learn/predmachlearn"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to write and share with others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/voice-tech-podcast/automated-readability-prediction-71d40b677563",
      title: "Automated Readability Prediction",
      description:
        "Readability prediction models score texts based on how easily a reader can extract the information from them. This is a rather subjective definition — but so are many other widely used terms, such as sentiment in natural language processing. So how do we actually measure readability?"
    },
    {
      url: "https://medium.com/@edloginova/attention-in-nlp-734c6fa9d983",
      title: "Attention in NLP",
      description:
        "The basic idea: each time the model predicts an output word, it only uses parts of an input where the most relevant information is concentrated instead of an entire sentence. In other words, it only pays attention to some input words. Let’s investigate how this is implemented."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS & MENTORSHIP",
  subtitle: emoji(
    "I love to share my passion for research & I firmly believe in outreach and mentorship importance."
  ),

  talks: [
    {
      title: "How Activists Can Use AI To Enhance Their Workflow",
      subtitle: "Unconference 2023",
      event_url: "https://te-st.org/events/unconference-ai/"
    },
    
    {
      title: "Projector 2023",
      subtitle: "mentor",
      event_url: "https://projector2023.te-st.org/"
    },
    
    {
      title: "Projector 2024",
      subtitle: "mentor",
      event_url: "https://projectorhack.org/project/track1/"
    },
    {
      title: "NLP Against Russian State Propaganda",
      subtitle: "Belgium NLP Meetup (18th)",
      event_url: "https://www.meetup.com/belgium-nlp-meetup/events/292355655/?eventOrigin=group_events_list"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Competitions Section

const podcastSection = {
  title: emoji("Hackathons 🤖"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume!",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("So Text Me Maybe ☎️"),
  subtitle: "Want to discuss a project or just say hi? Get in touch!",
  number: "+32439672087",
  email_address: "ekaterina.d.loginova@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
