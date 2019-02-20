const { RichText, PlainText } = wp.editor;
import Template from './template';

export default ({ attributes, setAttributes }) => {
	const title = (
		<PlainText
			onChange={title => setAttributes({ title })}
			value={attributes.title}
			placeholder="Title"
			className="heading"
		/>
	);

	const desc = (
		<RichText
			onChange={desc => setAttributes({ desc })}
			value={attributes.desc}
			multiline="p"
			placeholder="Long description"
			formattingControls={['bold', 'italic', 'underline']}
		/>
	);

	return <Template title={title} desc={desc} />;
};
