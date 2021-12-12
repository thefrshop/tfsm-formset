import React from 'react';
import './ViewList.css';

import { Button, Form, Image, Tab, Tabs } from 'react-bootstrap';

class ViewLists extends React.Component {
	constructor(props) {
		super(props);
	}

	ItemsView = () => {
		console.log(this.props.selected);
		let viewlist = [];
		this.props.selected.forEach((selitem, sindex) => {
			let viewlistItem = [];

			this.props.columns.forEach((item, index) => {
				viewlistItem.push(
					<div className="ViewListItem" key={index}>
						<div className="Viewitle">{item.text} </div>
						<div className="ViewContent">{selitem[item.dataField]}</div>
					</div>
				);
			});
			viewlist.push(
				<div className="ViewListRow" key={sindex}>
					{viewlistItem}
				</div>
			);
		});

		return viewlist;
	};
	render() {
		return this.ItemsView();
	}
}

export default ViewLists;
