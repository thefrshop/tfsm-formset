import React from 'react';
import { Button, Form } from 'react-bootstrap';
import moment from 'moment-timezone';
import 'moment/locale/ko';
import { GoSync } from 'react-icons/go';

class ProductCodeGen extends React.Component {
	constructor(props) {
		super(props);

		this.props.forwardGetValue(() => this.GetNum());

		this.state = {
			Code: this.props.InitialValue
		};
	}

	componentDidMount = () => {
		this.GetValue(this.props.ModifyMode);
	};

	GetValue = (ModifyMode) => {
		if (ModifyMode !== true) {
			var Code = moment().format('X');
			this.setState({ Code: Code });
		}
	};

	RefreshNum = () => {
		var Code = moment().format('X');
		this.setState({ Code: Code });
	};

	GetNum = () => {
		return { [this.props.name]: this.state.Code };
	};

	onChange = () => {};

	render() {
		return (
			<div className="CodeGen">
				<Form.Text className="CodeGenText">{this.state.Code}</Form.Text>

				{this.props.ModifyMode ? null : (
					<Button size="sm" variant="SelectEnd" onClick={this.RefreshNum}>
						<GoSync color="#1f8b3b" size="1.5em" />
					</Button>
				)}
			</div>
		);
	}
}

export default ProductCodeGen;
