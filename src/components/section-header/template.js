export default props => {
	return (
		<div className="section-header">
			<h3 className="title">{props.title}</h3>
			<div className="desc">{props.desc}</div>
		</div>
	);
};
