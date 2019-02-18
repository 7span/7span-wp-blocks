const { InnerBlocks } = wp.editor;
export default () => {
	return (
		<div>
			<InnerBlocks.Content />
		</div>
	);
};
