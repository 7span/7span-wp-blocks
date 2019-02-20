const { registerBlockType } = wp.blocks;
import blockGroup from '../../components/block-group';
import icon from '../../icons';
import helper from '../../helper';

registerBlockType( 'sevenspan/pricing', {
	title: 'Pricing',
	icon: icon( 'pricing' ),
	category: 'sevenspan-blocks',

	...blockGroup( {
		className: 'pricing-group',
		editor: {
			grid: 4,
		},
		template: [
			[
				'sevenspan/pricing-item',
				{
					title: 'Basic',
					price: '$99',
					label: 'Buy Now',
					desc: helper.defaultList( [
						'50 Five Star Ratings',
						'100 App Downloads',
						'Up to 5 Custom Keywords',
						'24 / 7 Support',
						'Delivery: 3 Days',
					] ),
				},
			],
			[
				'sevenspan/pricing-item',
				{
					title: 'Premium',
					price: '$199',
					label: 'Buy Now',
					desc: helper.defaultList( [
						'100 Five Star Ratings',
						'200 App Downloads',
						'Up to 10 Custom Keywords',
						'24 / 7 Support',
						'Delivery: 5 Days',
					] ),
				},
			],
			[
				'sevenspan/pricing-item',
				{
					title: 'Advanced',
					price: '$299',
					label: 'Buy Now',
					desc: helper.defaultList( [
						'200 Five Star Ratings',
						'500 App Downloads',
						'Up to 20 Custom Keywords',
						'24 / 7 Support',
						'Delivery: 10 Days',
					] ),
				},
			],
			[
				'sevenspan/pricing-item',
				{
					title: 'Build Custom Plan',
					label: 'Buy Now',
					desc: helper.defaultList( [
						'Custom Star Ratings',
						'Custom App Downloads',
						'Up to 50 Custom Keywords',
						'24 / 7 Support',
					] ),
				},
			],
		],
		allowedBlocks: [ 'sevenspan/pricing-item' ],
	} ),
} );
