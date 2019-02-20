const { RichText, PlainText, InspectorControls } = wp.editor;
import Template from './template';

import { ButtonEdit, ButtonInspector } from '../../../../components/button';

export default ({ attributes, setAttributes }) => {
	const title = (
		<PlainText
			onChange={title => setAttributes({ title })}
			value={attributes.title}
			placeholder="Title"
			className="heading"
		/>
	);

	const price = (
		<PlainText
			onChange={price => setAttributes({ price })}
			value={attributes.price}
			placeholder="price"
			className="heading"
		/>
	);

	const desc = (
		<RichText
			onChange={desc => setAttributes({ desc })}
			value={attributes.desc}
			multiline="li"
			placeholder="Long description"
			formattingControls={['bold', 'italic', 'underline']}
		/>
	);

	const button = <ButtonEdit attributes={attributes} />;

	return [
		<InspectorControls key="inspector">
			<ButtonInspector
				attributes={attributes}
				onChange={settings => {
					setAttributes({
						label: settings.label,
						url: settings.url,
						size: settings.size,
						style: settings.style
					});
				}}
			/>
		</InspectorControls>,
		<Template title={title} desc={desc} price={price} button={button} />
	];
};
