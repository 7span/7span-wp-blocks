import './scss/style.scss';
import './scss/editor.scss';

const { registerBlockType } = wp.blocks;

import save from './templates/save';
import edit from './templates/edit';
import attributes from './attributes';

registerBlockType('sevenspan/accordion-item', {
	title: 'Accordion Item',
	icon: 'button',
	parent: ['sevenspan/accordion'],
	category: 'sevenspan-blocks',

	attributes,

	edit(props) {
		return edit(props);
	},

	save(props) {
		return save(props);
	}
});
