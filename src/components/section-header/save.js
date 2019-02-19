import Template from './template';

export default ({ attributes }) => {
	return <Template title={attributes.title} desc={attributes.desc} />;
};
