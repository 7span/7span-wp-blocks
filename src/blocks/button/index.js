import './scss/editor.scss';
import './scss/style.scss';

import save from './templates/save';
import edit from './templates/edit';
import attributes from './attributes';
import icon from '../icons';

const { registerBlockType } = wp.blocks;

registerBlockType( 'sevenspan/button-block', {
	title: 'Button',
	icon: icon('button'),
	category: 'sevenspan-blocks',
	attributes,
	edit( props ) {
		return edit( props );
	},
	save( props ) {
		return save( props );
	},
} );
