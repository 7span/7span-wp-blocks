export default {
	title: {
		source: 'text',
		selector: '.feature__title'
	},
	desc: {
		type: 'array',
		source: 'children',
		selector: '.feature__desc'
	},
	imageAlt: {
		attribute: 'alt',
		selector: '.feature__image img'
	},
	imageSrc: {
		attribute: 'src',
		selector: '.feature__image img'
	}
};
