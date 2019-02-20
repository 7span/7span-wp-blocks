const { MediaUpload } = wp.editor;
import icon from '../../icons';
const addImage = icon( 'addImage' );
const edit = icon( 'edit' );

export default ( { attributes, src, alt, onChange } ) => {
	const getImageButton = openEvent => {
		return (
			<div className="ss-image">
				{ attributes[ src ] ? (
					<div className="ss-image__wrap">
						<img src={ attributes[ src ] } alt={ attributes[ alt ] } />
						<button
							type="button"
							onClick={ openEvent }
							className="ss-image__update"
						>
							{ edit }
						</button>
					</div>
				) : (
					<button type="button" onClick={ openEvent } className="ss-image__add">
						{ addImage }
					</button>
				) }
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

	return imageHolder;
};
