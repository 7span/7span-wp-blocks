import './styles/editor.scss';
import './styles/style.scss';
const { InnerBlocks } = wp.editor;

/*----------------------------------
Create Block
----------------------------------*/
const BlockGroup = props => {
	const containerClass = [ 'ss-block', 'ss-block--group', props._className ];
	const listClass = [ 'ss-block__list', `${ props._className }__list` ];

	if ( props.editor ) {
		const grid = props.editor.grid || 3;
		listClass.push( `grid-${ grid }` );
	}

	return (
		<section className={ containerClass.join( ' ' ) }>
			<div className="ss-container">
				<div className={ listClass.join( ' ' ) }>{ props.content }</div>
			</div>
		</section>
	);
};

/*----------------------------------
Export Save & Edit Config
----------------------------------*/
export default ( { className, template, allowedBlocks, editor } ) => {
	return {
		edit() {
			return (
				<BlockGroup
					_className={ className }
					editor={ editor }
					content={
						<InnerBlocks template={ template } allowedBlocks={ allowedBlocks } />
					}
				/>
			);
		},

		save() {
			return (
				<BlockGroup _className={ className } content={ <InnerBlocks.Content /> } />
			);
		},
	};
};
