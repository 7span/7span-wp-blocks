export default {
	title: {
		source: 'text',
		selector: '.section-header__title',
		default: 'This is Section!',
	},
	desc: {
		type: 'array',
		source: 'children',
		selector: '.section-header__desc',
	},
};
