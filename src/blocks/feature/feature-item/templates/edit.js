const { RichText, PlainText, MediaUpload } = wp.editor;
const { Button } = wp.components;

export default ( { attributes, setAttributes } ) => {
	const getImageButton = openEvent => {
		if ( attributes.imageUrl ) {
			return (
				<img src={ attributes.imageUrl } onClick={ openEvent } className="image" />
			);
		}
		return (
			<div className="button-container">
				<Button onClick={ openEvent } className="button button-large">
						Pick an image
				</Button>
			</div>
		);
	};

	return [
		<div>
			<MediaUpload
				onSelect={ media => {
					setAttributes( { imageAlt: media.alt, imageUrl: media.url } );
				} }
				type="image"
				value={ attributes.imageID }
				render={ ( { open } ) => getImageButton( open ) }
			/>
			<PlainText
				onChange={ content => setAttributes( { title: content } ) }
				value={ attributes.title }
				placeholder="Title"
				className="heading"
			/>
			<RichText
				onChange={ content => setAttributes( { desc: content } ) }
				value={ attributes.desc }
				multiline="p"
				placeholder="Long description"
				formattingControls={ [ 'bold', 'italic', 'underline' ] }
			/>
		</div>,
	];
};
