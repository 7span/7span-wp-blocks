<<<<<<< HEAD
const { RichText, PlainText, InspectorControls, InnerBlocks } = wp.editor;
const { PanelBody } = wp.components;
=======
const {
	RichText,
	MediaUpload,
	PlainText,
	InspectorControls,
	InnerBlocks
} = wp.editor;
const { Button, PanelBody, TextControl } = wp.components;
>>>>>>> 5c85f1599e3b271c2a1bce43448bb439a3d23a0b
import Template from './common';
import SSImage from '../../../components/image/edit';

<<<<<<< HEAD
import { ButtonEdit, ButtonInspector } from '../../../components/button';
=======
export default ({ attributes, setAttributes }) => {
	const getImageButton = openEvent => {
		if (attributes.imageUrl) {
			return (
				<img
					src={attributes.imageUrl}
					onClick={openEvent}
					className="image"
				/>
			);
		}
		return (
			<div className="button-container">
				<Button onClick={openEvent} className="button button-large">
					Pick an image
				</Button>
			</div>
		);
	};

	//PHOTO
	const photo = (
		<MediaUpload
			type="image"
			onSelect={media => {
				setAttributes({ imageAlt: media.alt, imageUrl: media.url });
			}}
			value={attributes.imageID}
			render={({ open }) => getImageButton(open)}
		/>
	);
>>>>>>> 5c85f1599e3b271c2a1bce43448bb439a3d23a0b

export default ( { attributes, setAttributes } ) => {
	const title1 = (
		<PlainText
			placeholder="Top Title"
			onChange={content => setAttributes({ title1: content })}
			value={attributes.title1}
		/>
	);

	const title2 = (
		<PlainText
			placeholder="Bottom Title"
			onChange={content => setAttributes({ title2: content })}
			value={attributes.title2}
		/>
	);

	const summary = (
		<RichText
			placeholder="Description"
			onChange={content => setAttributes({ summary: content })}
			value={attributes.summary}
			multiline="p"
			formattingControls={['bold', 'italic', 'underline']}
			isSelected={attributes.isSelected}
		/>
	);

<<<<<<< HEAD
	const button = <ButtonEdit attributes={ attributes } />;

	const image = (
		<SSImage
			attributes={ attributes }
			src="imageSrc"
			alt="imageAlt"
			onChange={ media => {
				setAttributes( { imageAlt: media.alt, imageSrc: media.url } );
			} }
=======
	const button = (
		<InnerBlocks
			template={[['sevenspan/button-block']]}
			templateLock="all"
>>>>>>> 5c85f1599e3b271c2a1bce43448bb439a3d23a0b
		/>
	);

	return [
		<InspectorControls key="inspector">
			<ButtonInspector
				attributes={ attributes }
				onChange={ settings => {
					setAttributes( {
						label: settings.label,
						url: settings.url,
						size: settings.size,
						style: settings.style,
					} );
				} }
			/>
		</InspectorControls>,

<<<<<<< HEAD
		<div key="editor">
			<Template
				image={ image }
				title1={ title1 }
				title2={ title2 }
				desc={ summary }
				button={ button }
			/>
		</div>,
=======
		<Template
			key="editor"
			image={photo}
			title1={title1}
			title2={title2}
			desc={summary}
			button={button}
		/>
>>>>>>> 5c85f1599e3b271c2a1bce43448bb439a3d23a0b
	];
};
