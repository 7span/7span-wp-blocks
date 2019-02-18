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

registerBlockType('sevenspan/feature', {
	title: 'Feature',
	icon: 'button',
	category: 'sevenspan-blocks',

	edit(props) {
		return edit(props);
	},

	save(props) {
		return save(props);
	}
});
