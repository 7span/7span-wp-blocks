export default {
	title1: {
		source: 'text',
		selector: '.hero__title-top',
	},
	title2: {
		source: 'text',
		selector: '.hero__title-bottom',
	},
	summary: {
		type: 'array',
		source: 'children',
		selector: '.hero__desc',
	},
	imageAlt: {
		attribute: 'alt',
		selector: '.ss-image img',
	},
	imageSrc: {
		attribute: 'src',
		selector: '.ss-image img',
	},
	label: {
		source: 'text',
		selector: '.ss-button',
		default: 'Button',
	},
	url: {
		selector: '.ss-button',
		source: 'attribute',
		attribute: 'href',
	},
	size: {
		selector: '.ss-button',
		default: 'large',
	},
	style: {
		selector: '.ss-button',
		default: 'default',
	},
};
