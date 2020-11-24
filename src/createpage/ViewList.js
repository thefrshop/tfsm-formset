import React from 'react';

import { Button, Form, Image, Tab, Tabs } from 'react-bootstrap';

class ViewList extends React.Component {
	constructor(props) {
		super(props);
	}

	ItemsView = () => {
		let viewlist = [];
		this.props.ListData.forEach((item) => {
			this.props.columns;

			viewlist.push(
				<div className="ViewSelected">
					<div className="name">{name} : </div>
					<div className="data">{this.state.Selected[this.props.viewField]}</div>
				</div>
			);
		});
	};
	render() {
		return <div className="ProductCreatePage">{this.ItemsView()}</div>;
	}
}

export default viewList;
