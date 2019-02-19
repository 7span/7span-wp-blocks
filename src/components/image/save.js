export default ( { attributes, src, alt } ) => {
	const image = ( src, alt ) => {
		if ( ! src ) {
			return null;
		}
		if ( alt ) {
			return <img src={ src } alt={ alt } />;
		}
		// No alt set, so let's hide it from screen readers
		return <img src={ src } alt="" aria-hidden="true" />;
	};

	return <div className="ss-image">{ image }</div>;
};
