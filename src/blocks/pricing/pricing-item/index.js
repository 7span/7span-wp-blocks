import './scss/style.scss';
import './scss/editor.scss';

const { registerBlockType } = wp.blocks;

import save from './templates/save';
import edit from './templates/edit';
import attributes from './attributes';

registerBlockType('sevenspan/pricing-item', {
	title: 'Pricing Item',
	icon: 'button',
	parent: ['sevenspan/pricing'],
	category: 'sevenspan-blocks',

	attributes,

	edit(props) {
		return edit(props);
	},

	save(props) {
		return save(props);
	}
});
