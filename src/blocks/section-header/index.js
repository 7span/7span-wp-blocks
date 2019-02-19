import './style.scss';
import './editor.scss';

const { registerBlockType } = wp.blocks;

import save from './save';
import edit from './edit';
import icon from '../icons';


registerBlockType('sevenspan/section-header', {
	title: 'Section Header',
	icon: icon('sectionHeader'),
	category: 'sevenspan-blocks',

	attributes: {
		title: {
			source: 'text',
			selector: '.title',
		},
		desc: {
			type: 'array',
			source: 'children',
			selector: '.desc',
		}
	},

	edit(props) {
		return edit(props);
	},

	save(props) {
		return save(props);
	},

});
