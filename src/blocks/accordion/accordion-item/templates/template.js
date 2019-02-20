export default props => {
	return (
		<section className="accordion">
			<details>
				<summary className="accordion__title">{ props.title }</summary>
				<div className="accordion__desc ss-p">{ props.desc }</div>
			</details>
		</section>
	);
};
