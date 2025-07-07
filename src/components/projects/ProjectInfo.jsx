const ProjectInfo = ({ info }) => {
	const {
		ClientHeading,
		CompanyInfo,
		ObjectivesHeading,
		ObjectivesDetails,
		Technologies,
		ProjectDetailsHeading,
		ProjectDetails,
		SocialSharingHeading,
		SocialSharing,
	} = info;

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Client Info */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						{ClientHeading}
					</p>
					<ul className="leading-loose">
						{CompanyInfo.map((info) => (
							<li
								className="font-general-regular text-ternary-dark dark:text-ternary-light"
								key={info.id}
							>
								<span>{info.title}: </span>
								<a
									href={
										info.title === 'Website'
											? info.details
											: undefined
									}
									className={
										info.title === 'Website' || info.title === 'Phone'
											? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
											: ''
									}
									aria-label="Project Website or Phone"
								>
									{info.details}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{ObjectivesHeading}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{ObjectivesDetails}
					</p>
				</div>

				{/* Technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{Technologies[0].title}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{Technologies[0].techs.join(', ')}
					</p>
				</div>

				{/* Social Sharing */}
				{SocialSharing.length > 0 && (
					<div>
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{SocialSharingHeading}
						</p>
						<div className="flex items-center gap-3 mt-5">
							{SocialSharing.map((social) => (
								<a
									key={social.id}
									href={social.url}
									target="__blank"
									aria-label="Share Project"
									className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
								>
									<span className="text-lg lg:text-2xl">{social.icon}</span>
								</a>
							))}
						</div>
					</div>
				)}
			</div>

			{/* Right column - Project Details */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{ProjectDetailsHeading}
				</p>
				{ProjectDetails.map((details) => (
					<p
						key={details.id}
						className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
					>
						{details.details}
					</p>
				))}
			</div>
		</div>
	);
};

export default ProjectInfo;
