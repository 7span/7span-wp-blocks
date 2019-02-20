export default ( { attributes, src, alt } ) => {
	const image = ( src, alt ) => {
		if ( ! attributes[ src ] ) {
			return null;
		}
		if ( attributes[ alt ] ) {
			return <img src={ attributes[ src ] } alt={ attributes[ alt ] } />;
		}
		// No alt set, so let's hide it from screen readers
		return <img src={ attributes[ src ] } alt="" aria-hidden="true" />;
	};

	return image( src, alt );
};
