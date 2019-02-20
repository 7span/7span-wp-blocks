import Template from './template';
import { ButtonSave } from '../../../../components/button';

export default ({ attributes }) => {
	return (
		<Template
			title={attributes.title}
			price={attributes.price}
			desc={attributes.desc}
			button={<ButtonSave attributes={attributes} />}
		/>
	);
};
