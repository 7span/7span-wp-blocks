const { MediaUpload } = wp.editor;
const { Button } = wp.components;

export default ( { attributes, src, alt, onChange } ) => {
	const getImageButton = openEvent => {
		if ( attributes[ src ] ) {
			return (
				<img
					src={ attributes[ src ] }
					alt={ attributes[ alt ] }
					onClick={ openEvent }
					className="image"
				/>
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

	const imageHolder = (
		<MediaUpload
			type="image"
			onSelect={ media => {
				onChange( media );
			} }
			value={ attributes.imageID }
			render={ ( { open } ) => getImageButton( open ) }
		/>
	);

	return (
		<div className="ss-image" key="editor">
			{ imageHolder }
		</div>
	);
};
