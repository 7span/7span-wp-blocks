export default props => {
	return (
		<section className="ss-block hero">
			<div className="ss-container">
				<div className="hero__wrap">
					<div className="hero__image">{ props.image }</div>
					<div className="hero__content">
						<h3 className="hero__title-top">{ props.title1 }</h3>
						<h3 className="hero__title-bottom">{ props.title2 }</h3>
						<div className="hero__desc ss-p">{ props.desc }</div>
						{ props.button }
					</div>
				</div>
			</div>
		</section>
	);
};
