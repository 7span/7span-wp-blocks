const { RichText, PlainText } = wp.editor;

export default ({ attributes, setAttributes }) => {
  return [
    <div>
      <PlainText
        onChange={content => setAttributes({ title: content })}
        value={attributes.title}
        placeholder="Title"
        className="heading"
      />
      <RichText
        onChange={content => setAttributes({ desc: content })}
        value={attributes.desc}
        multiline="p"
        placeholder="Long description"
        formattingControls={['bold', 'italic', 'underline']}
      />
    </div>
  ];
};