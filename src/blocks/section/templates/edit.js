import Template from './template';
import { SectionHeaderEdit } from '../../../components/section-header';
const { InnerBlocks } = wp.editor;

export default ({ attributes, setAttributes }) => {
	const header = (
		<SectionHeaderEdit
			attributes={attributes}
			onChange={data => {
				setAttributes({ title: data.title, desc: data.desc });
				console.log(data);
			}}
		/>
	);

	const content = <InnerBlocks />;
	return <Template header={header} content={content} />;
};
