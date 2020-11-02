import React from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';
import moment from 'moment-timezone';
import 'moment/locale/ko';
import { GoSync } from 'react-icons/go';

class ProductCodeGen extends React.Component {
	constructor(props) {
		super(props);

		this.props.forwardGetValue(() => this.GetNum());
	}

	GetValue = (ModifyMode) => {
		if (ModifyMode === true) {
			//console.log('InitialValue', this.props.InitialValue);
			return this.props.InitialValue;
		} else {
			var Code = moment().format('X');
			return Code;
		}
	};

	RefreshNum = () => {
		var Code = moment().format('X');

		this.setState({ product_no: Code });
	};

	GetNum = () => {
		return this.state.product_no;
	};

	render() {
		return (
			<InputGroup>
				<Form.Control value={this.GetValue(this.props.ModifyMode)} readOnly={true} />

				{this.props.ModifyMode ? null : (
					<Button size="sm" variant="SelectEnd" onClick={this.RefreshNum}>
						<GoSync color="#1f8b3b" size="1.5em" />
					</Button>
				)}
			</InputGroup>
		);
	}
}

export default ProductCodeGen;
