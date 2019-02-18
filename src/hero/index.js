/**
 * BLOCK: sevenspan-hero
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, PlainText, InspectorControls, InnerBlocks } = wp.editor;
const { Button, PanelBody, TextControl } = wp.components;
import SSButton from '../button';



registerBlockType('sevenspan/hero-block', {
	title: __('Hero'),
	icon: 'shield',
	category: 'sevenspan-blocks',

	attributes: {
		title1: {
			source: 'text',
			selector: '.card__title1',
		},
		title2: {
			source: 'text',
			selector: '.card__title2',
		},
		summary: {
			type: 'array',
			source: 'children',
			selector: '.card__summary'
		},
		imageAlt: {
			attribute: 'alt',
			selector: '.card__image'
		},
		imageUrl: {
			attribute: 'src',
			selector: '.card__image'
		}
	},

	edit: function ({ attributes, setAttributes }) {

		const getImageButton = (openEvent) => {
			if (attributes.imageUrl) {
				return (
					<img
						src={attributes.imageUrl}
						onClick={openEvent}
						className="image"
					/>
				);
			}
			else {
				return (
					<div className="button-container">
						<Button
							onClick={openEvent}
							className="button button-large"
						>
							Pick an image
            </Button>
					</div>
				);
			}
		};

		return [
			<InspectorControls>
				<PanelBody>
					<TextControl
						onChange={content => setAttributes({ title1: content })}
						value={attributes.title1}
						placeholder="Your card title"
						className="heading"
					/>
				</PanelBody>
			</InspectorControls>,
			<div className="">
				<MediaUpload
					onSelect={media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); }}
					type="image"
					value={attributes.imageID}
					render={({ open }) => getImageButton(open)}
				/>
				<PlainText
					onChange={content => setAttributes({ title1: content })}
					value={attributes.title1}
					placeholder="Your card title"
					className="heading"
				/>
				<PlainText
					onChange={content => setAttributes({ title2: content })}
					value={attributes.title2}
					placeholder="Your card title"
					className="heading"
				/>
				<RichText
					onChange={content => setAttributes({ summary: content })}
					value={attributes.summary}
					multiline="p"
					placeholder="Your card text"
					formattingControls={['bold', 'italic', 'underline']}
					isSelected={attributes.isSelected}
				/>
				<InnerBlocks
					template={[['sevenspan/button-block']]}
					templateLock="all"
				/>
			</div>
		];
	},

	save: function ({ attributes }) {

		const heroImage = (src, alt) => {
			if (!src) return null;

			if (alt) {
				return (
					<img
						className="card__image"
						src={src}
						alt={alt}
					/>
				);
			}

			// No alt set, so let's hide it from screen readers
			return (
				<img
					className="card__image"
					src={src}
					alt=""
					aria-hidden="true"
				/>
			);
		};

		return (
			<div className="card">
				<div className="card__content">
					{heroImage(attributes.imageUrl, attributes.imageAlt)}
					<h3 className="card__title1">{attributes.title1}</h3>
					<h3 className="card__title2">{attributes.title2}</h3>
					<div className="card__summary">
						{attributes.summary}
					</div>
				</div>
				<InnerBlocks.Content />
			</div>
		);
	},
});
