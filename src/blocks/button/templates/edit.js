const { InspectorControls } = wp.editor;
const {
	Button,
	PanelBody,
	TextControl,
	MenuGroup,
	MenuItem,
	SelectControl,
} = wp.components;

import _attributes from '../attributes';

export default ( { attributes, setAttributes } ) => {
	//Classes
	const classNames = [
		'ss-button',
		`ss-button--${ attributes.size }`,
		`ss-button--${ attributes.style }`,
	].join( ' ' );

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
		<button className={ classNames } key="editor">
			{ attributes.label }
		</button>,
	];
};
