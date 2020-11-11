import React from 'react';
import moment from 'moment-timezone';
import 'moment/locale/ko';
import { GoSync } from 'react-icons/go';

class ProductCodeGen extends React.Component {
	constructor(props) {
		super(props);

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
			this.setState({ Code: Code }, () => this.onChange());
		}
	};

	RefreshNum = () => {
		var Code = moment().format('X');
		this.setState({ Code: Code }, () => this.onChange());
	};

	onChange = () => {
		if (this.props.onChange !== undefined) {
			this.props.onChange({
				target: {
					name: this.props.name,
					value: this.state.Code
				}
			});
		}
	};

	render() {
		return (
			<div className="CodeGen">
				<div className="CodeGenText">{this.state.Code}</div>

				{this.props.ModifyMode ? null : (
					<button size="sm" className="btn-SelectEnd" onClick={this.RefreshNum}>
						<GoSync color="#1f8b3b" size="1.5em" />
					</button>
				)}
			</div>
		);
	}
}

export default ProductCodeGen;
