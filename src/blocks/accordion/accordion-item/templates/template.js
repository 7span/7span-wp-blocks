export default props => {
	return (
		<div className="accordion">
			<h3 className="accordion__title">{props.title}</h3>
			<div className="accordion__desc">{props.desc}</div>
		</div>
	);
};
