const ProjectGallery = ({ images }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{images.map((img) => (
				<div className="mb-10 sm:mb-0" key={img.id}>
					<img
						src={img.img}
						alt={img.title}
						className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
					/>
				</div>
			))}
		</div>
	);
};

export default ProjectGallery;
