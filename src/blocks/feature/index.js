const { registerBlockType } = wp.blocks;

import './styles/editor.scss';
import './styles/style.scss';
import save from './templates/save';
import edit from './templates/edit';
import icon from '../../icons';

registerBlockType( 'sevenspan/feature', {
	title: 'Feature',
	icon: icon( 'feature' ),
	category: 'sevenspan-blocks',
	edit( props ) {
		return edit( props );
	},
	save( props ) {
		return save( props );
	},
} );
