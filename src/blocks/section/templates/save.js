import Template from './template';
import { SectionHeaderSave } from '../../../components/section-header';
const { InnerBlocks } = wp.editor;

export default ({ attributes }) => {
	const header = <SectionHeaderSave attributes={attributes} />;
	const content = <InnerBlocks.Content />;
	return <Template header={header} content={content} />;
};
