// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Gamified Productivity App',
		publishDate: 'Sep 2025',
		tags: 'React / Django / PostgreSQL',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
    ClientHeading: 'Project Type',
    CompanyInfo: [
      {
        id: 1,
        title: 'Project Type',
        details: 'MSc Final Project at QMUL',
      },
      {
        id: 2,
        title: 'Focus',
        details: 'Gamification + Productivity',
      },
      {
        id: 3,
        title: 'Website',
        details: 'https://github.com/elena1211/gamified_app',
      },
    ],
    ObjectivesHeading: 'Objective',
    ObjectivesDetails:
      'Build a productivity app that uses adaptive scheduling and gamification to increase user motivation and habit formation.',
    Technologies: [
      {
        title: 'Tools & Technologies',
        techs: ['React', 'Django', 'TailwindCSS', 'PostgreSQL', 'Figma'],
      },
    ],
    ProjectDetailsHeading: 'Challenge',
    ProjectDetails: [
      {
        id: 1,
        details:
          'Designing a reward-based task system that adapts to user behaviour while remaining intuitive was a major UX and logic challenge.',
      },
      {
        id: 2,
        details:
          'Creating a game-like progression system for task completion with visual feedback involved balancing aesthetics and functionality.',
      },
    ],
    SocialSharingHeading: 'Share This',
    SocialSharing: [],
  },
  RelatedProject: {
    title: 'Related Projects',
    Projects: [],
  },
};