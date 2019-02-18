const {
	RichText,
	MediaUpload,
	PlainText,
	InspectorControls,
	InnerBlocks
} = wp.editor;
const { Button, PanelBody, TextControl } = wp.components;
import Template from './common';

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

	const button = (
		<InnerBlocks
			template={[['sevenspan/button-block']]}
			templateLock="all"
		/>
	);

	return [
		<InspectorControls key="inspector">
			<PanelBody />
		</InspectorControls>,

		<Template
			key="editor"
			image={photo}
			title1={title1}
			title2={title2}
			desc={summary}
			button={button}
		/>
	];
};
