const { RichText, MediaUpload, PlainText, InspectorControls } = wp.editor;
const { Button, PanelBody, TextControl } = wp.components;

export default ({ attributes, setAttributes }) => {
  return [
    <InspectorControls>
      <TextControl
        label="Label"
        type="string"
        onChange={content => setAttributes({ label: content })}
        value={attributes.label}
      />
      <TextControl
        label="URL"
        type="string"
        onChange={content => setAttributes({ url: content })}
        value={attributes.url}
      />
    </InspectorControls>,
    <Button
      isDefault>
      {attributes.label}
    </Button>
  ];
};