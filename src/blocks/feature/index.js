const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

import icon from '../icons';

registerBlockType('sevenspan/feature', {
	title: 'Feature',
	icon: icon('feature'),
	category: 'sevenspan-blocks',

	edit({ attributes }) {
		return (
			<div className="features">
				<InnerBlocks
					template={[
						['sevenspan/feature-item'],
						['sevenspan/feature-item'],
						['sevenspan/feature-item']
					]}
					allowedBlocks={['sevenspan/feature-item']}
				/>
			</div>
		);
	},

	save({ attributes }) {
		return (
			<div className="features">
				<InnerBlocks.Content />
			</div>
		);
	}
});
