import React from 'react';
import './ListSelect.css';
import { Button } from 'react-bootstrap';
import PopupListSelect from './PopupListSelect';

class ListSelected extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ShowPopup: false,
			Selected: ''
		};
	}

	ViewSelected = () => {
		console.log(this.state.Selected);
		if (this.state.Selected !== undefined) {
			return (
				<div className="ViewSelected">
					<div className="name">{this.props.name} : </div>
					<div className="data">{this.props.viewField}</div>
				</div>
			);
		}

		return '';
	};

	openSelect = () => {
		this.setState({
			ShowPopup: true
		});
	};

	onSelectOk = (Selected) => {
		this.setState(
			{
				Selected: Selected,
				ShowPopup: false
			},
			() => this.onChange()
		);
	};

	onChange = () => {
		if (this.props.onChange !== undefined) {
			this.props.onChange({
				target: {
					name: this.props.name,
					value: this.state.Selected
				}
			});
		}
	};

	hideCatSelect = () => {
		this.setState({
			ShowPopup: false
		});
	};

	render() {
		return (
			<div className="CatSelectView">
				<PopupListSelect
					{...this.props}
					ispopup={this.state.ShowPopup}
					onHide={this.hideCatSelect}
					onOk={this.onSelectOk}
				/>

				<Button variant="SelectPre" onClick={this.openSelect}>
					선택
				</Button>
				<div className="CatSelectContent">{this.ViewSelected()}</div>
			</div>
		);
	}
}

export default ListSelected;
