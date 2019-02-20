const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

import icon from '../icons';

registerBlockType('sevenspan/pricing', {
	title: 'Pricing',
	icon: icon('pricing'),
	category: 'sevenspan-blocks',

	edit({ attributes }) {
		return (
			<div className="pricing">
				<InnerBlocks
					template={[
						['sevenspan/pricing-item'],
						['sevenspan/pricing-item'],
						['sevenspan/pricing-item']
					]}
					allowedBlocks={['sevenspan/pricing-item']}
				/>
			</div>
		);
	},

	save({ attributes }) {
		return (
			<div className="pricing">
				<InnerBlocks.Content />
			</div>
		);
	}
});
