const { RichText, PlainText } = wp.editor;
import Template from './template';

class Editor extends React.Component {
	constructor(props) {
		super(props);
		this.state = props.attributes;
	}

	componentDidUpdate(prevProps, prevState) {
		this.props.onChange(this.state);
	}
	render() {
		const title = (
			<PlainText
				onChange={title => this.setState({ title })}
				value={this.state.title}
				placeholder="Title"
				className="heading"
			/>
		);

		const desc = (
			<RichText
				onChange={desc => this.setState({ desc })}
				value={this.state.desc}
				multiline="p"
				placeholder="Long description"
				formattingControls={['bold', 'italic', 'underline']}
			/>
		);

		return <Template title={title} desc={desc} />;
	}
}
export default Editor;
