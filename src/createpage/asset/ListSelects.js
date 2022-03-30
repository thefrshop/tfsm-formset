import React from 'react';
import './ListSelect.css';
import { Button, Image } from 'react-bootstrap';
import PopupListSelects from './PopupListSelects';

class ListSelected extends React.Component {
	constructor(props) {
		super(props);

		let Selected = [];
		if (this.props.InitialValue !== undefined) Selected = this.props.InitialValue;

		this.state = {
			Selected: Selected,
			ShowPopup: false
		};
	}

	openSelect = () => {
		this.setState({
			ShowPopup: true
		});
	};

	remove = (item) => {
		var data = this.state.Selected;
		var fitem = data.find((m) => m[this.props.keyField] === item[this.props.keyField]);
		const idx = data.indexOf(fitem);
		if (idx > -1) data.splice(idx, 1);

		//console.log(item, fitem, data);

		this.setState(
			{
				Selected: data
			},
			() => this.onChange()
		);
	};

	onSelectOk = (Selected) => {
		if (this.props.multselect === true) {
			//console.log(Selected);
			var data = this.state.Selected;

			Selected.forEach((item) => {
				var fitem = data.find((m) => m[this.props.keyField] === item.data[this.props.keyField]);
				//console.log(fitem);

				if (fitem === undefined) data.push(item.data);
			});
			this.setState(
				{
					Selected: data,
					ShowPopup: false
				},
				() => this.onChange()
			);
		} else {
			console.log(Selected);

			var data = this.state.Selected;
			var fitem = data.find((m) => m[this.props.keyField] === Selected[this.props.keyField]);
			//console.log(fitem);

			if (fitem === undefined) data.push(Selected);

			this.setState(
				{
					Selected: data,
					ShowPopup: false
				},
				() => this.onChange()
			);
		}
	};

	onChange = () => {
		//console.log(this.state.Selected);

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
				<PopupListSelects {...this.props} ispopup={this.state.ShowPopup} onHide={this.hideCatSelect} onOk={this.onSelectOk} />

				<Button variant="SelectPre" onClick={this.openSelect}>
					추가
				</Button>
			</div>
		);
	}
}

export default ListSelected;
