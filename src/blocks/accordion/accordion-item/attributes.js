export default {
	title: {
		source: 'text',
		selector: '.accordion__title'
	},
	desc: {
		type: 'array',
		source: 'children',
		selector: '.accordion__desc'
	}
};
