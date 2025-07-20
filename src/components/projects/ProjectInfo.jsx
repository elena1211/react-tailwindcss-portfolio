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
			{/* Left Column */}
			<div className="w-full sm:w-1/3 text-left">
				{/* Client Info */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						{ClientHeading}
					</p>
					<ul className="leading-loose space-y-2">
						{CompanyInfo.map((item) => {
							const isLink = ['Website', 'GitHub', 'Figma', 'CW1 PDF', 'CW2 PDF', 'Analysis Report'].includes(item.title);
							const isPhone = item.title === 'Phone';

							return (
								<li key={item.id} className="break-words">
									<span className="text-ternary-dark dark:text-ternary-light">
										{item.title}:{' '}
									</span>

									{isLink ? (
										<a
											href={item.details}
											target="_blank"
											rel="noopener noreferrer"
											className="!text-blue-600 !underline hover:!text-blue-800 dark:!text-blue-400 dark:hover:!text-blue-200 transition-colors duration-300"
											style={{ 
												color: '#2563eb',
												textDecoration: 'underline'
											}}
										>
											{item.title === 'GitHub' && item.details.includes('github.com')
												? 'View on GitHub'
												: item.title === 'Figma' && item.details.includes('figma.com')
												? 'View Figma Prototype'
												: item.title === 'CW1 PDF'
												? 'View CW1 Report (PDF)'
												: item.title === 'CW2 PDF'
												? 'View CW2 Report (PDF)'
												: item.title === 'Analysis Report'
												? 'View Analysis Report (PDF)'
												: item.details}
										</a>
									) : isPhone ? (
										<a
											href={`tel:${item.details}`}
											className="!text-blue-600 !underline hover:!text-blue-800 dark:!text-blue-400 dark:hover:!text-blue-200 transition-colors duration-300"
											style={{ 
												color: '#2563eb',
												textDecoration: 'underline'
											}}
										>
											{item.details}
										</a>
									) : (
										<span className="text-ternary-dark dark:text-ternary-light">
											{item.details}
										</span>
									)}
								</li>
							);
						})}
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
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`Share on ${social.name}`}
									className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
								>
									<span className="text-lg lg:text-2xl">{social.icon}</span>
								</a>
							))}
						</div>
					</div>
				)}
			</div>

			{/* Right Column: Project Details */}
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
