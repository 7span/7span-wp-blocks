export default {
	title1: {
		source: 'text',
		selector: '.home-banner__title-top',
	},
	title2: {
		source: 'text',
		selector: '.home-banner__title-bottom',
	},
	summary: {
		type: 'array',
		source: 'children',
		selector: '.home-banner__desc',
	},
	imageAlt: {
		attribute: 'alt',
		selector: '.home-banner__image img',
	},
	imageUrl: {
		attribute: 'src',
		selector: '.home-banner__image img',
	},
};
