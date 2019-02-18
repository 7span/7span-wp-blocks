export default props => {
	return (
		<section className="home-banner">
			<div className="ss-container">
				<div className="home-banner__wrap">
					<div className="home-banner__image">{ props.image }</div>
					<div className="home-banner__content">
						<h3 className="home-banner__title-top">{ props.title1 }</h3>
						<h3 className="home-banner__title-bottom">{ props.title2 }</h3>
						<div className="home-banner__desc">{ props.desc }</div>
						{ props.button }
					</div>
				</div>
			</div>
		</section>
	);
};
