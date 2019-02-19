export default {
	title: {
		source: 'text',
		selector: '.title'
	},
	desc: {
		type: 'array',
		source: 'children',
		selector: '.desc'
	}
};
