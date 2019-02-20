const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

import icon from '../icons';

registerBlockType('sevenspan/accordion', {
	title: 'Accordion',
	icon: icon('accordion'),
	category: 'sevenspan-blocks',

	edit() {
		return (
			<div className="accordion">
				<InnerBlocks
					template={[
						['sevenspan/accordion-item'],
						['sevenspan/accordion-item'],
						['sevenspan/accordion-item']
					]}
					allowedBlocks={['sevenspan/accordion-item']}
				/>
			</div>
		);
	},

	save() {
		return (
			<div className="accordion">
				<InnerBlocks.Content />
			</div>
		);
	}
});
