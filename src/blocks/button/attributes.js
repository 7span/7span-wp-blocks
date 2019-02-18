export default {
	label: {
		source: 'text',
		selector: '.button',
		default: 'Button',
	},
	url: {
		selector: '.button', // From tag a
		source: 'attribute', // binds an attribute of the tag
		attribute: 'href', // bin
	},
	size: {
		selector: '.button',
		default: 'large',
		options: [
			{ label: 'Large', value: 'large' },
			{ label: 'Regular', value: 'regular' },
			{ label: 'Small', value: 'small' },
		],
	},
	style: {
		selector: '.button',
		default: 'default',
		options: [
			{ label: 'Default', value: 'default' },
			{ label: 'Outline', value: 'outline' },
		],
	},
};
