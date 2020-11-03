import React from 'react';
import './CatSelected.css';
import { Button } from 'react-bootstrap';
import PopupCatSelect from './PopupCatSelect';

class CatSelected extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ShowPopup: false
		};
	}

	ViewSelected = () => {
		//console.log(this.props.selected);
		let table = [];
		if (this.state.CategorySelect !== undefined) {
			this.state.CategorySelect.forEach((item, catindex) => {
				if (item !== null)
					table.push(
						<div className="ViewSelected" key={catindex}>
							<div className="name">{this.props.name[catindex]} : </div>
							<div className="data">{item[this.props.viewField]}</div>
						</div>
					);
			});
		}

		return table;
	};

	openCatSelect = () => {
		this.setState({
			ShowPopup: true
		});
	};

	CatSelectOk = (CategorySelect) => {
		this.setState({
			CategorySelect: CategorySelect,
			ShowPopup: false
		});
	};

	hideCatSelect = () => {
		this.setState({
			ShowPopup: false
		});
	};

	render() {
		return (
			<div className="CatSelectView">
				<PopupCatSelect
					title={this.props.title}
					name={this.props.name}
					viewField={this.props.viewField}
					hierarchyData={this.props.hierarchyData}
					ispopup={this.state.ShowPopup}
					onHide={this.hideCatSelect}
					onOk={this.CatSelectOk}
				/>

				<Button variant="SelectPre" onClick={this.openCatSelect}>
					선택
				</Button>
				<div className="CatSelectContent">{this.ViewSelected()}</div>
			</div>
		);
	}
}

export default CatSelected;
