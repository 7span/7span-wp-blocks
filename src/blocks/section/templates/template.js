export default props => {
	return (
		<div className="section">
			<div className="section__header">{props.header}</div>
			<div className="section__contain">{props.content}</div>
		</div>
	);
};
