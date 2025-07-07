// Import images
import LevelUpImage from '../images/levelup.png';
import CovidImage from '../images/covid_dashboard.png';

export const projectsData = [
  {
    id: 1,
    slug: 'levelup',
    title: 'LevelUp',
    category: 'Web Application',
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
  // ...其他專案
];
