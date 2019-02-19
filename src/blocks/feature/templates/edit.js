const { InnerBlocks } = wp.editor;

export default () => {
	return [
		<InnerBlocks
			key="feature"
			template={ [ [ 'sevenspan/section-header' ], [ 'sevenspan/feature-item' ] ] }
			allowedBlocks={ [ 'sevenspan/feature-item' ] }
		/>,
	];
};
