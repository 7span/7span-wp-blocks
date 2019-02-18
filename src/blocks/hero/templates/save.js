const { InnerBlocks } = wp.editor;
import Template from './common';

export default ( { attributes } ) => {
	const heroImage = ( src, alt ) => {
		if ( ! src ) {
			return null;
		}
		if ( alt ) {
			return <img src={ src } alt={ alt } />;
		}
		// No alt set, so let's hide it from screen readers
		return <img src={ src } alt="" aria-hidden="true" />;
	};

	return (
		<Template
			image={ heroImage( attributes.imageUrl, attributes.imageAlt ) }
			title1={ attributes.title1 }
			title2={ attributes.title2 }
			desc={ attributes.summary }
			button={ <InnerBlocks.Content /> }
		/>
	);
};
