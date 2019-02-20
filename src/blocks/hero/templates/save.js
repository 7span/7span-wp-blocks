import Template from './template';
import { ImageSave } from '../../../components/image';
import { ButtonSave } from '../../../components/button';

export default ( { attributes } ) => {
	const image = (
		<ImageSave attributes={ attributes } alt="imageAlt" src="imageSrc" />
	);

	return (
		<Template
			image={ image }
			title1={ attributes.title1 }
			title2={ attributes.title2 }
			desc={ attributes.summary }
			button={ <ButtonSave attributes={ attributes } /> }
		/>
	);
};
