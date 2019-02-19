const { RichText, PlainText } = wp.editor;
import Template from './template';
import { ImageEdit } from '../../../../components/image';

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

	const media = (
		<ImageEdit
			attributes={attributes}
			src="imageSrc"
			alt="imageAlt"
			onChange={media => {
				setAttributes({ imageAlt: media.alt, imageSrc: media.url });
			}}
		/>
	);

	return <Template media={media} title={title} desc={desc} />;
};
