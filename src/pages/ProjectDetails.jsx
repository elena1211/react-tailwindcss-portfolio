import { useParams } from 'react-router-dom';
import { allProjectDetails } from '../data/singleProjectData';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
	const { projectId } = useParams();
	const project = allProjectDetails[projectId];

	if (!project) {
		return <div className="text-center text-red-500 py-10">Project not found</div>;
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.15 }}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<ProjectHeader data={project.ProjectHeader} />
			<ProjectGallery images={project.ProjectImages} />
			<ProjectInfo info={project.ProjectInfo} />
			<ProjectRelatedProjects related={project.RelatedProject} />
		</motion.div>
	);
};

export default ProjectDetails;