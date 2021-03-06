import './scss/style.scss';
import './scss/editor.scss';

const { registerBlockType } = wp.blocks;

import save from './templates/save';
import edit from './templates/edit';
import attributes from './attributes';

registerBlockType('sevenspan/feature-item', {
	title: 'Feature Item',
	icon: 'button',
	parent: ['sevenspan/feature'],
	category: 'sevenspan-blocks',

	attributes,

	edit(props) {
		return edit(props);
	},

	save(props) {
		return save(props);
	}
});
