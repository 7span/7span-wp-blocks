export default ( { attributes } ) => {
	let el;
	//Classes
	const classNames = [
		'ss-button',
		`ss-button--${ attributes.size }`,
		`ss-button--${ attributes.style }`,
	].join( ' ' );

	if ( attributes.url ) {
		el = (
			<a className={ classNames } href={ attributes.url }>
				{ attributes.label }
			</a>
		);
	} else {
		el = <button className={ classNames }>{ attributes.label }</button>;
	}
	return <div>{ el }</div>;
};
