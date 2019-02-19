export default ( { label, size, style, url } ) => {
	let el;
	//Classes
	const classNames = [
		'ss-button',
		`ss-button--${ size }`,
		`ss-button--${ style }`,
	].join( ' ' );

	if ( url ) {
		el = (
			<a className={ classNames } href={ url }>
				{ label }
			</a>
		);
	} else {
		el = <button className={ classNames }>{ label }</button>;
	}
	return <div>{ el }</div>;
};
