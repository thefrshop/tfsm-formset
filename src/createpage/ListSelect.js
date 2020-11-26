import React from 'react';
import './ListSelect.css';
import { Button } from 'react-bootstrap';
import PopupListSelect from './PopupListSelect';

class ListSelected extends React.Component {
	constructor(props) {
		super(props);

		var Selected = '';
		if (this.props.InitialValue !== undefined) Selected = this.props.InitialValue;

		this.state = {
			Selected: Selected,
			ShowPopup: false
		};
	}

	ViewSelected = () => {
		if (this.state.Selected !== '') {
			var name = '';
			this.props.columns.forEach((element) => {
				if (element.dataField === this.props.viewField) name = element.text;
			});
			//console.log(this.state.Selected);
			return (
				<div className="ViewSelected">
					<div className="name">{name} : </div>
					<div className="data">{this.state.Selected[this.props.viewField]}</div>
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
