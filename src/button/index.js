/**
 * BLOCK: sevenspan-hero
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import save from './save';
import edit from './edit';

registerBlockType('sevenspan/button-block', {
	title: __('Button'),
	icon: 'button',
	category: 'sevenspan-blocks',

	attributes: {
		label: {
			source: 'text',
			selector: '.button',
			default: 'Button',
		},
		url: {
			selector: '.button', // From tag a
			source: 'attribute', // binds an attribute of the tag
			attribute: 'href', // bin
		}
	},

	edit(props) {
		return edit(props);
	},

	save(props) {
		return save(props);
	},

});
