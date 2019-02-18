const { InspectorControls } = wp.editor;
const { PanelBody, ServerSideRender, RangeControl } = wp.components;

export default ({ attributes, setAttributes }) => {
	return [
		<InspectorControls key="inspector">
			<PanelBody>
				<RangeControl
					label="No of posts"
					onChange={noOfPosts => setAttributes({ noOfPosts })}
					value={attributes.noOfPosts}
					min="3"
					max="6"
				/>
			</PanelBody>
		</InspectorControls>,
		<ServerSideRender block="sevenspan/posts" attributes={attributes} />
	];
};
