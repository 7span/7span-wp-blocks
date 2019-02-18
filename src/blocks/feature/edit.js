const { RichText, PlainText, InnerBlocks } = wp.editor;

export default () => {
	return [
		<div>
			<InnerBlocks
				template={[
					['sevenspan/section-header'],
					['sevenspan/feature-item']
				]}
				allowedBlocks={['sevenspan/feature-item']}
			/>
		</div>
	];
};
