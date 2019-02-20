export default props => {
	return (
		<article className="pricing">
			<header>
				<h3 className="pricing__title">{ props.title }</h3>
				<strong className="pricing__price">{ props.price }</strong>
			</header>
			<main>
				<ul className="pricing__desc ss-p">{ props.desc }</ul>
			</main>
			<footer>{ props.button }</footer>
		</article>
	);
};
