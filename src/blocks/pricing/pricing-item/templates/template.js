export default props => {
	return (
		<div className="pricing">
			<h3 className="pricing__title">{props.title}</h3>
			<h4 className="pricing__price">{props.price}</h4>
			<div className="pricing__desc">{props.desc}</div>
			{props.button}
		</div>
	);
};
