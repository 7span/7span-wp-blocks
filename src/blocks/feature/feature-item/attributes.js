export default {
	title: {
		source: 'text',
		selector: '.feature__title',
		default: '1.Choose plan',
	},
	desc: {
		type: 'array',
		source: 'children',
		selector: '.feature__desc',
		default: [ 'Hello' ],
	},
	imageAlt: {
		attribute: 'alt',
		selector: '.feature__image img',
	},
	imageSrc: {
		attribute: 'src',
		selector: '.feature__image img',
	},
};
