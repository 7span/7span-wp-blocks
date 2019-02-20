import './scss/style.scss';
import './scss/editor.scss';

import save from './templates/save';
import edit from './templates/edit';
import attributes from './attributes';
import icon from '../../icons';

const { registerBlockType } = wp.blocks;

registerBlockType( 'sevenspan/hero-block', {
	title: 'Hero',
	icon: icon( 'hero' ),
	category: 'sevenspan-blocks',
	attributes,
	edit( props ) {
		return edit( props );
	},
	save( props ) {
		return save( props );
	},
} );
