import React from 'react';
import './ViewList.css';

import { Button, Form, Image, Tab, Tabs } from 'react-bootstrap';

class ViewList extends React.Component {
	constructor(props) {
		super(props);
	}

	ItemsView = () => {
		let viewlist = [];
		if (this.props.selected !== '') {
			this.props.columns.forEach((item, index) => {
				viewlist.push(
					<div className="ViewList" key={index}>
						<div className="Viewitle">{item.text} </div>
						<div className="ViewContent">{this.props.selected[item.dataField]}</div>
					</div>
				);
			});
		}

		return viewlist;
	};
	render() {
		return this.ItemsView();
	}
}

export default ViewList;
