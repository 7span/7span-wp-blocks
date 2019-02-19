export default props => {
	return (
		<div className="feature">
			<div className="feature__image">{props.media}</div>
			<h3 className="feature__title">{props.title}</h3>
			<div className="feature__desc">{props.desc}</div>
		</div>
	);
};
