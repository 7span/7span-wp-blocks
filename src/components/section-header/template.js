export default props => {
	return (
		<div className="ss-container">
			<div className="section-header">
				<h3 className="section-header__title">{ props.title }</h3>
				<div className="section-header__desc ss-p">{ props.desc }</div>
			</div>
		</div>
	);
};
