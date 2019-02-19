import Template from './template';
import { ImageSave } from '../../../../components/image';

export default ({ attributes }) => {
	const media = (
		<ImageSave attributes={attributes} alt="imageAlt" src="imageSrc" />
	);

	return (
		<Template
			title={attributes.title}
			desc={attributes.desc}
			media={media}
		/>
	);
};
