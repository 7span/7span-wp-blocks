export default ({ attributes }) => {
	const media = (src, alt) => {
		if (!src) return null;

		if (alt) {
			return <img className="feature__image" src={src} alt={alt} />;
		}

		// No alt set, so let's hide it from screen readers
		return (
			<img
				className="feature__image"
				src={src}
				alt=""
				aria-hidden="true"
			/>
		);
	};

	return (
		<div>
			{media(attributes.imageUrl, attributes.imageAlt)}
			<h3 className="title">{attributes.title}</h3>
			<div className="desc">{attributes.desc}</div>
		</div>
	);
};
