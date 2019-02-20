import './styles/style.scss';
import './styles/editor.scss';

import save from './templates/save';
import edit from './templates/edit';
import attributes from './attributes';

const { registerBlockType } = wp.blocks;

registerBlockType( 'sevenspan/posts', {
	title: 'Posts',
	icon: 'megaphone',
	category: 'sevenspan-blocks',
	attributes,
	edit( props ) {
		return edit( props );
	},
	save( props ) {
		return save( props );
	},
} );
