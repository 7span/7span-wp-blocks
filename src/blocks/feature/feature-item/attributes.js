export default {
	title: {
		source: 'text',
		selector: '.title',
	},
	desc: {
		type: 'array',
		source: 'children',
		selector: '.desc',
	},
	imageAlt: {
		attribute: 'alt',
		selector: '.feature__image',
	},
	imageUrl: {
		attribute: 'src',
		selector: '.feature__image',
	},
};
