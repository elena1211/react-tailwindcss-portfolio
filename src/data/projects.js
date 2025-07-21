// Import images
import LevelUpImage from '../images/levelup.png';
import CovidImage from '../images/covid_dashboard.png';
import AlzheimersImage from '../images/alzheimers_ui.png';
import TodoImage from '../images/todo.png';
import DataAnalyticsImage from '../images/data_analytics.png';
import JobTrackerImage from '../images/job_tracker.png';

export const projectsData = [
  {
    id: 1,
    slug: 'levelup',
    title: 'LevelUp',
    category: 'Web Development',
    img: LevelUpImage,
    ProjectHeader: {
      title: 'LevelUp - Gamified Productivity App',
      publishDate: 'Jul 2025',
      tags: 'React / Django / PostgreSQL',
    },
  },
  {
    id: 2,
    slug: 'covid',
    title: 'COVID-19 Dashboard',
    category: 'Data Analytics',
    img: CovidImage,
    ProjectHeader: {
      title: 'COVID-19 Dashboard',
      publishDate: 'Feb 2025',
      tags: 'Python / Jupyter / Pandas / Matplotlib',
    },
  },
  {
    id: 3,
    slug: 'alzheimers',
    title: "Alzheimer's Disease Support Application",
    category: 'UI/UX Design',
    img: AlzheimersImage,
    ProjectHeader: {
      title: "Alzheimer's Disease Support Application (UX/UI Demo)",
      publishDate: 'Jan 2025',
      tags: 'Figma / UI/UX Design / Accessibility',
    },
  },
  {
    id: 4,
    slug: 'todo',
    title: 'To-do List CLI App',
    category: 'Web Development',
    img: TodoImage,
    ProjectHeader: {
      title: 'To-do List CLI App',
      publishDate: 'Jan 2025',
      tags: 'Python / CLI / File I/O',
    },
  },
  {
    id: 5,
    slug: 'dataanalytics',
    title: 'Data Analytics Coursework',
    category: 'Data Analytics',
    img: DataAnalyticsImage,
    ProjectHeader: {
      title: 'UK Software Industry & Attrition Analysis',
      publishDate: 'Apr 2025',
      tags: 'Pandas / Matplotlib / Random Forest / K-means / BN',
    },
  },
  {
    id: 6,
    slug: 'jobtracker',
    title: 'Job Tracker App',
    category: 'Web Development',
    img: JobTrackerImage,
    ProjectHeader: {
      title: 'Job Tracker - Application Management Tool',
      publishDate: 'Jul 2025',
      tags: 'React / TailwindCSS / localStorage',
    },
  },
];
