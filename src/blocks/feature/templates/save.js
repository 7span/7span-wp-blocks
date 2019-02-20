import Template from './template';
const { InnerBlocks } = wp.editor;

export default ( { attributes, setAttributes } ) => {
	return <Template content={ <InnerBlocks.Content /> } />;
};
