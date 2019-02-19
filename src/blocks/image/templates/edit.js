const { InspectorControls } = wp.editor;
const { PanelBody } = wp.components;

import SSImage from '../../../components/image/edit';

export default ( { attributes, setAttributes } ) => {
	return [
		<InspectorControls key="inspector">
			<PanelBody />
		</InspectorControls>,
		<div className="ss-image" key="editor">
			<SSImage
				attributes={ attributes }
				onChange={ media => {
					setAttributes( { alt: media.alt, src: media.url } );
				} }
			/>
		</div>,
	];
};
