// Import images
import LevelUpImage from '../images/levelup.png';
import CovidImage from '../images/covid_dashboard.png';
import AlzheimersImage from '../images/alzheimers_ui.png';

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
};