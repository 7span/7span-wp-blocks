import './scss/style.scss';
import './scss/editor.scss';

const { registerBlockType } = wp.blocks;

import save from './templates/save';
import edit from './templates/edit';
import icon from '../icons';
import attributes from './attributes';

registerBlockType('sevenspan/section', {
	title: 'Section',
	icon: icon('sectionHeader'),
	category: 'sevenspan-blocks',
	attributes,

	edit(props) {
		return edit(props);
	},

	save(props) {
		return save(props);
	}
});
