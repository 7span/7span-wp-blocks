export default {
	title: {
		source: 'text',
		selector: '.pricing__title'
	},
	price: {
		source: 'text',
		selector: '.pricing__price'
	},
	desc: {
		type: 'array',
		source: 'children',
		selector: '.pricing__desc'
	},
	label: {
		source: 'text',
		selector: '.ss-button',
		default: 'Button'
	},
	url: {
		selector: '.ss-button',
		source: 'attribute',
		attribute: 'href'
	},
	size: {
		selector: '.ss-button',
		default: 'large'
	},
	style: {
		selector: '.ss-button',
		default: 'default'
	}
};
