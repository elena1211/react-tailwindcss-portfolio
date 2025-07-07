const ProjectRelatedProjects = ({ related }) => {
	const { title, Projects } = related;

	if (!Projects || Projects.length === 0) return null;

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{Projects.map((project) => (
					<img
						key={project.id}
						src={project.img}
						alt={project.title}
						className="rounded-xl cursor-pointer"
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;

