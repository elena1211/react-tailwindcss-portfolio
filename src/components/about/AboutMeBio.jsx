import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	const skills = [
		'React',
		'JavaScript', 
		'TailwindCSS',
		'Python',
		'Django',
		'PostgreSQL',
		'localStorage',
		'Git & GitHub'
	];

	const otherStrengths = [
		'UX awareness',
		'adaptive logic design',
		'visual communication',
		'agile teamwork',
		'stakeholder empathy'
	];

	return (
		<>
			{/* Profile Section */}
			<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20 sm:items-center">
				<div className="w-full sm:w-1/4 mb-7 sm:mb-0 flex justify-center sm:justify-start">
					<img src={profileImage} className="rounded-lg w-96" alt="Profile" />
				</div>

				<div className="font-general-regular w-full sm:w-3/4 text-left">
					{aboutMe.map((bio, index) => (
						<p
							className={`mb-4 text-ternary-dark dark:text-ternary-light text-base leading-relaxed ${
								index === 0 ? 'font-bold text-lg text-primary-dark dark:text-primary-light' : ''
							}`}
							key={bio.id}
							dangerouslySetInnerHTML={{ __html: bio.bio }}
						>
						</p>
					))}
				</div>
			</div>

			{/* Skills Section */}
			<div className="mt-16 mb-10">
				<h2 className="text-2xl font-semibold mb-6 text-secondary-dark dark:text-secondary-light">Key Skills</h2>
				<div className="flex flex-wrap gap-3">
					{skills.map((skill) => (
						<div 
							key={skill} 
							className="bg-slate-800 border border-gray-300 dark:border-gray-600 text-white shadow-lg px-5 py-2"
							style={{ 
								backgroundColor: '#1e293b', 
								borderRadius: '9999px'
							}}
						>
							<span className="font-medium text-sm">{skill}</span>
						</div>
					))}
				</div>
			</div>

			{/* Other Strengths Section */}
			<div className="mt-16 mb-10">
				<h2 className="text-2xl font-semibold mb-6 text-secondary-dark dark:text-secondary-light">Other Strengths</h2>
				<div className="flex flex-wrap gap-3">
					{otherStrengths.map((strength) => (
						<div 
							key={strength} 
							className="bg-slate-800 border border-gray-300 dark:border-gray-600 text-white shadow-lg px-5 py-2"
							style={{ 
								backgroundColor: '#1e293b', 
								borderRadius: '9999px'
							}}
						>
							<span className="font-medium text-sm">{strength}</span>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default AboutMeBio;
