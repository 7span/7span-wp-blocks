/**
 * BLOCK: sevenspan-hero
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { registerBlockType } = wp.blocks;

import save from './save';
import edit from './edit';

registerBlockType('sevenspan/feature-item', {
	title: 'Feature Item',
	icon: 'button',
	parent: ['sevenspan/feature'],
	category: 'sevenspan-blocks',

	attributes: {
		title: {
			source: 'text',
			selector: '.title'
		},
		desc: {
			type: 'array',
			source: 'children',
			selector: '.desc'
		},
		imageAlt: {
			attribute: 'alt',
			selector: '.feature__image'
		},
		imageUrl: {
			attribute: 'src',
			selector: '.feature__image'
		}
	},

	edit(props) {
		return edit(props);
	},

	save(props) {
		return save(props);
	}
});
