const { PanelBody, TextControl, SelectControl } = wp.components;

const settings = {
	size: {
		options: [
			{ label: 'Large', value: 'large' },
			{ label: 'Regular', value: 'regular' },
			{ label: 'Small', value: 'small' },
		],
	},
	style: {
		options: [
			{ label: 'Default', value: 'default' },
			{ label: 'Outline', value: 'outline' },
		],
	},
};

class Inspector extends React.Component {
	constructor( props ) {
		super( props );
		this.state = props.attributes;
	}

	componentDidUpdate( prevProps, prevState ) {
		this.props.onChange( this.state );
	}

	render() {
		return (
			<PanelBody title="Button">
				<TextControl
					label="Label"
					type="string"
					onChange={ label => this.setState( { label } ) }
					value={ this.state.label }
				/>
				<TextControl
					label="URL"
					type="string"
					onChange={ url => this.setState( { url } ) }
					value={ this.state.url }
				/>
				<SelectControl
					label="Size"
					value={ this.state.size }
					options={ settings.size.options }
					onChange={ size => {
						this.setState( { size } );
					} }
				/>
				<SelectControl
					label="Style"
					value={ this.state.style }
					options={ settings.style.options }
					onChange={ style => {
						this.setState( { style } );
					} }
				/>
			</PanelBody>
		);
	}
}
export default Inspector;
