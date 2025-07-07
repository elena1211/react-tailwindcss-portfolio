// Import images
import LevelUpImage from '../images/levelup.png';
import CovidImage from '../images/covid_dashboard.png';

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
};