import Template from './template';
const { InnerBlocks } = wp.editor;
import helper from '../../../helper';

export default ( { attributes, setAttributes } ) => {
	const content = (
		<InnerBlocks
			template={ [
				[
					'sevenspan/feature-item',
					{
						title: '1.Choose plan',
						desc: helper.defaultDesc(
							'Submit your key requirements such as keywords, language etc.'
						),
					},
				],
				[
					'sevenspan/feature-item',
					{
						title: '2.Choose Options',
						desc: helper.defaultDesc(
							'Get your app featured in our app reviewers\' community of half million users'
						),
					},
				],
				[
					'sevenspan/feature-item',
					{
						title: '3.Payment',
						desc: helper.defaultDesc(
							'Sit back and watch your overall ratings and keyword rankings improve everyday!'
						),
					},
				],
			] }
			allowedBlocks={ [ 'sevenspan/feature-item' ] }
		/>
	);

	return [ <Template key="editor" content={ content } /> ];
};
