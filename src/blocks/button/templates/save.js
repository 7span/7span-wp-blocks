import Template from './common';

export default ( { attributes } ) => {
	return (
		<Template
			label={ attributes.label }
			style={ attributes.style }
			size={ attributes.size }
			url={ attributes.url }
		/>
	);
};
