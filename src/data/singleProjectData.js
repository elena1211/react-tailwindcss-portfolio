// Import images
import LevelUpImage from '../images/levelup.png';
import CovidImage from '../images/covid_dashboard.png';
import AlzheimersImage from '../images/alzheimers_ui.png';
import TodoImage from '../images/todo.png';
import DataAnalyticsImage from '../images/data_analytics.png';
import JobTrackerImage from '../images/job_tracker.png';

export const allProjectDetails = {
  levelup: {
    ProjectHeader: {
      title: 'LevelUp - Gamified Productivity App',
      publishDate: 'Jul 2025',
      tags: 'React, Django, PostgreSQL, TailwindCSS, Figma',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'LevelUp Mockup',
        img: LevelUpImage,
      },
    ],
    ProjectInfo: {
      ClientHeading: 'Project Context',
      CompanyInfo: [
        {
          id: 1,
          title: 'Type',
          details: 'MSc Final Project at Queen Mary University of London',
        },
        {
          id: 2,
          title: 'Goal',
          details: 'Boost productivity through gamified task scheduling',
        },
        {
          id: 3,
          title: 'GitHub',
          details: 'https://github.com/elena1211/gamified_app',
        },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'To create a gamified productivity application where users can earn experience points, level up, and grow RPG-style attributes like Knowledge and Charisma based on completed tasks.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['React', 'Django', 'PostgreSQL', 'TailwindCSS', 'Figma'],
        },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        {
          id: 1,
          details:
            'Designing meaningful game mechanics such as XP systems and attribute growth, while keeping the UI friendly and encouraging.',
        },
        {
          id: 2,
          details:
            'Implementing an adaptive task scheduling engine that balances difficulty, stress levels, and daily routines for different user goals.',
        },
        {
          id: 3,
          details:
            'Building an intuitive admin dashboard for testing flows, logging tasks, and simulating user growth in Django before connecting to frontend.',
        },
      ],
      SocialSharingHeading: 'Share This',
      SocialSharing: [],
    },
    RelatedProject: {
      title: 'Related Projects',
      Projects: [],
    },
  },

  covid: {
    ProjectHeader: {
      title: 'COVID-19 Dashboard',
      publishDate: 'Feb 2025',
      tags: 'Python, Pandas, Jupyter, API, Data Visualisation',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'COVID Dashboard View',
        img: CovidImage,
      },
    ],
    ProjectInfo: {
      ClientHeading: 'Project Overview',
      CompanyInfo: [
        {
          id: 1,
          title: 'Type',
          details: 'Coursework Project',
        },
        {
          id: 2,
          title: 'Objective',
          details: 'Visualise national-level COVID-19 trends using official data',
        },
        {
          id: 3,
          title: 'GitHub',
          details:
            'https://github.com/elena1211/QMUL_practice/tree/main/COVID%20DASHBOARD',
        },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'To create a user-interactive dashboard that allows real-time visualisation of COVID-19 metrics in the UK using the UKHSA API.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['Python', 'Jupyter', 'Pandas', 'Matplotlib', 'ipywidgets'],
        },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        {
          id: 1,
          details:
            'Working with a real-time government API with unpredictable data formats and latency, requiring robust error handling and fallback mechanisms.',
        },
        {
          id: 2,
          details:
            'Designing a clean UI in Jupyter using widgets while keeping code modular and data-responsive.',
        },
      ],
      SocialSharingHeading: 'Share This',
      SocialSharing: [],
    },
    RelatedProject: {
      title: 'Related Projects',
      Projects: [],
    },
  },

  alzheimers: {
    ProjectHeader: {
      title: "Alzheimer's Disease Support Application (UX/UI Demo)",
      publishDate: 'Jan 2025',
      tags: 'Figma, UI/UX Design, Accessibility, Group Project',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'Alzheimer App UI',
        img: AlzheimersImage,
      },
    ],
    ProjectInfo: {
      ClientHeading: 'Project Overview',
      CompanyInfo: [
        {
          id: 1,
          title: 'Type',
          details: 'Group Project (UX/UI Coursework)',
        },
        {
          id: 2,
          title: 'Role',
          details: 'UI Designer & Interaction Planner',
        },
        {
          id: 3,
          title: 'Figma',
          details: 'https://www.figma.com/proto/VfjIbmtJBrHyVjnM76dEAD/Interactive-System-Design---D?node-id=32-316&p=f&t=4K72XAbj02ScwOXj-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=32%3A316', 
        },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'To design a user-friendly and emotionally sensitive application that supports caregivers and patients with Alzheimer’s Disease. The goal was to deliver intuitive features such as memory games, schedule management, and emergency contacts through accessible UI.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['Figma', 'Team Collaboration', 'Accessibility Principles'],
        },
      ],
      ProjectDetailsHeading: 'Highlights',
      ProjectDetails: [
        {
          id: 1,
          details:
            'Led the UI layout design process in Figma and conducted peer reviews on accessibility features.',
        },
        {
          id: 2,
          details:
            'Designed with empathy in mind: font size, colour contrast, and iconography were tailored for elderly users.',
        },
        {
          id: 3,
          details:
            'Collaborated closely with developers and testers to translate concept into prototype-ready wireframes.',
        },
      ],
      SocialSharingHeading: 'Share This',
      SocialSharing: [],
    },
    RelatedProject: {
      title: 'Related Projects',
      Projects: [],
    },
  }, 
  todo: {
    ProjectHeader: {
      title: 'To-do List CLI App',
      publishDate: 'Jan 2025',
      tags: 'Python, File I/O, CLI',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'Terminal View of To-do App',
        img: TodoImage,
      },
    ],
    ProjectInfo: {
      ClientHeading: 'Project Overview',
      CompanyInfo: [
        {
          id: 1,
          title: 'Type',
          details: 'Python Practice Project',
        },
        {
          id: 2,
          title: 'GitHub',
          details:
            'https://github.com/elena1211/QMUL_practice/blob/main/Python-practice/To-do%20list.py',
        },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'To build a lightweight command-line task manager that supports basic task operations like add, insert, remove, and mark complete, with data stored in a text file.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['Python', 'File I/O', 'Loops', 'Functions'],
        },
      ],
      ProjectDetailsHeading: 'Highlights',
      ProjectDetails: [
        {
          id: 1,
          details:
            'Supports dynamic task list with insert, remove, and mark-as-done functionality.',
        },
        {
          id: 2,
          details:
            'Uses file read/write to persist tasks between sessions using `tasks.txt`.',
        },
        {
          id: 3,
          details:
            'Demonstrates structured code using functions and modular logic.',
        },
      ],
      SocialSharingHeading: 'Share This',
      SocialSharing: [],
    },
    RelatedProject: {
      title: 'Related Projects',
      Projects: [],
    },
  },
  dataanalytics: {
    ProjectHeader: {
      title: 'UK Software Industry & Employee Attrition Analytics',
      publishDate: 'Apr 2025',
      tags: 'Python, Pandas, Matplotlib, Scikit-learn, Bayesian Network',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'Top 10 Industries Bar Chart',
        img: DataAnalyticsImage,
      },
    ],
    ProjectInfo: {
      ClientHeading: 'Project Overview',
      CompanyInfo: [
        {
          id: 1,
          title: 'Type',
          details: 'Coursework Project (CW1 & CW2)',
        },
        {
          id: 2,
          title: 'Reports',
          details: 'See PDF reports below',
        },
        {
          id: 3,
          title: 'CW1 PDF',
          details:
            'https://github.com/elena1211/QMUL_practice/blob/main/Data%20Analytics/240165475_Yi-Ying_Chiang_data%20analytics_CW1.pdf',
        },
        {
          id: 4,
          title: 'CW2 PDF',
          details:
            'https://github.com/elena1211/QMUL_practice/blob/main/Data%20Analytics/CW2_240165475_YIYING%20CHIANG.pdf',
        },
        {
          id: 5,
          title: 'Analysis Report',
          details:
            'https://github.com/elena1211/QMUL_practice/blob/main/Data%20Analytics/UK_Industry_ProgrammingLang_Analysis.pdf',
        },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'To analyse UK software industry trends and employee attrition using supervised (Random Forest) and unsupervised (K-means) machine learning, along with Bayesian Networks for causal discovery.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: [
            'Python',
            'Pandas',
            'Matplotlib',
            'Scikit-learn',
            'Bayesian Network (GeNIe)',
          ],
        },
      ],
      ProjectDetailsHeading: 'Key Contributions',
      ProjectDetails: [
        {
          id: 1,
          details:
            'Analysed Stack Overflow survey data (n=3,224) to identify UK industries hiring software developers and their preferred programming languages.',
        },
        {
          id: 2,
          details:
            'Used Random Forest classifier to predict developer industry based on language usage, achieving 41% accuracy and identifying top predictive languages.',
        },
        {
          id: 3,
          details:
            'Implemented K-means clustering to reveal developer skill groupings across industries.',
        },
        {
          id: 4,
          details:
            'Used Bayesian Network models to analyse causal structure behind employee attrition based on HR dataset from Kaggle.',
        },
        {
          id: 5,
          details:
            'Compared performance of structure learning algorithms (HC, GES, SaiyanH) and evaluated DAG fit using BIC, SHD, F1.',
        },
      ],
      SocialSharingHeading: 'Share This',
      SocialSharing: [],
    },
    RelatedProject: {
      title: 'Related Projects',
      Projects: [],
    },
  },
  jobtracker: {
    ProjectHeader: {
      title: 'Job Tracker - Application Management Tool',
      publishDate: 'Jul 2025',
      tags: 'React, TailwindCSS, localStorage, Vite',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'Job Tracker UI',
        img: JobTrackerImage,
      },
    ],
    ProjectInfo: {
      ClientHeading: 'Project Overview',
      CompanyInfo: [
        {
          id: 1,
          title: 'Type',
          details: 'Personal Project',
        },
        {
          id: 2,
          title: 'Live Demo',
          details: 'https://job-tracker-phi-six.vercel.app/',
        },
        {
          id: 3,
          title: 'GitHub',
          details: 'https://github.com/elena1211/job-tracker',
        },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'To create a fully responsive, interactive tool to track job applications with support for adding, deleting, filtering, and status management—all in a modern UI.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['React', 'TailwindCSS', 'Vite', 'localStorage'],
        },
      ],
      ProjectDetailsHeading: 'Highlights',
      ProjectDetails: [
        {
          id: 1,
          details: 'Supports adding and removing job entries with state persistence.',
        },
        {
          id: 2,
          details: 'Built responsive and modern UI with TailwindCSS and dark mode support.',
        },
        {
          id: 3,
          details: 'Prepared for filtering and editing extensions.',
        },
        {
          id: 4,
          details: 'Deployed via Vercel with custom domain and automatic updates.',
        },
      ],
      SocialSharingHeading: 'Share This',
      SocialSharing: [],
    },
    RelatedProject: {
      title: 'Related Projects',
      Projects: [],
    },
  },
};