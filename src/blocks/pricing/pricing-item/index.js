import './styles/style.scss';
import './styles/editor.scss';

const { registerBlockType } = wp.blocks;

import save from './templates/save';
import edit from './templates/edit';
import attributes from './attributes';
import icon from '../../../icons';

registerBlockType( 'sevenspan/pricing-item', {
	title: 'Pricing Item',
	icon: icon( 'pricing' ),
	parent: [ 'sevenspan/pricing' ],
	category: 'sevenspan-blocks',

	attributes,

	edit( props ) {
		return edit( props );
	},

	save( props ) {
		return save( props );
	},
} );
