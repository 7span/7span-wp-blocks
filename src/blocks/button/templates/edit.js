const { InspectorControls } = wp.editor;
const { PanelBody, TextControl, SelectControl } = wp.components;

import _attributes from '../attributes';
import Template from './common';

export default ( { attributes, setAttributes } ) => {
	return [
		<InspectorControls key="inspector">
			<PanelBody>
				<TextControl
					label="Label"
					type="string"
					onChange={ label => setAttributes( { label } ) }
					value={ attributes.label }
				/>
				<TextControl
					label="URL"
					type="string"
					onChange={ url => setAttributes( { url } ) }
					value={ attributes.url }
				/>
				<SelectControl
					label="Size"
					value={ attributes.size }
					options={ _attributes.size.options }
					onChange={ size => {
						setAttributes( { size } );
					} }
				/>
				<SelectControl
					label="Style"
					value={ attributes.style }
					options={ _attributes.style.options }
					onChange={ style => {
						setAttributes( { style } );
					} }
				/>
			</PanelBody>
		</InspectorControls>,
		<Template
			key="editor"
			label={ attributes.label }
			style={ attributes.style }
			size={ attributes.size }
			url={ attributes.url }
		/>,
	];
};
