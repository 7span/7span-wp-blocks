const { RichText, PlainText, InspectorControls, InnerBlocks } = wp.editor;
import Template from './template';
import { ImageEdit } from '../../../components/image';

import { ButtonEdit, ButtonInspector } from '../../../components/button';

export default ( { attributes, setAttributes } ) => {
	const title1 = (
		<PlainText
			placeholder="Top Title"
			onChange={ content => setAttributes( { title1: content } ) }
			value={ attributes.title1 }
		/>
	);

	const title2 = (
		<PlainText
			placeholder="Bottom Title"
			onChange={ content => setAttributes( { title2: content } ) }
			value={ attributes.title2 }
		/>
	);

	const summary = (
		<RichText
			placeholder="Description"
			onChange={ content => setAttributes( { summary: content } ) }
			value={ attributes.summary }
			multiline="p"
			formattingControls={ [ 'bold', 'italic', 'underline' ] }
			isSelected={ attributes.isSelected }
		/>
	);

	const button = <ButtonEdit attributes={ attributes } />;

	const image = (
		<ImageEdit
			attributes={ attributes }
			src="imageSrc"
			alt="imageAlt"
			onChange={ media => {
				setAttributes( { imageAlt: media.alt, imageSrc: media.url } );
			} }
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

		<Template
			key="editor"
			image={ image }
			title1={ title1 }
			title2={ title2 }
			desc={ summary }
			button={ button }
		/>,
	];
};
