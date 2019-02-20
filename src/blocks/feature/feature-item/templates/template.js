export default props => {
	return (
		<div className="feature">
			<div className="feature__image">
				<div className="feature__icon">{ props.media }</div>
			</div>
			<div className="feature__content">
				<strong className="feature__title">{ props.title }</strong>
				<div className="feature__desc ss-p">{ props.desc }</div>
			</div>
		</div>
	);
};
