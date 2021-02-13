import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { InitItemsSet } from '../asset/InitItemsSet';
import * as FormFormat from '../asset/FormFormat';

//초기화
export const InitData = (item) => {
	if (item.default === undefined) item.default = item.Items[0].id;

	var TabData = InitItemsSet(item.Items);
	Object.assign(TabData, { [item.id]: item.default });
	//console.log(TabData);

	return TabData;
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode, UpdateInitData) => {
	let ItemsTable = [];

	let FormViewTable = [];
	item.Items.forEach((Tabitem, index) => {
		FormViewTable.push(FormFormat.ItemsView(M, index, Tabitem, values, handleChange, ModifyMode, UpdateInitData));
	});

	let TabTable = [];
	FormViewTable.forEach((TabItem, Tabindex) => {
		TabTable.push(
			<Tab
				key={Tabindex}
				className="ImageformBox"
				eventKey={item.Items[TabItem.key].id}
				title={item.Items[TabItem.key].name}
			>
				{TabItem}
			</Tab>
		);
	});

	if (item.default === undefined) item.default = item.Items[0].id;

	ItemsTable.push(
		<div className="ItemViewRow" key={index}>
			<div className="ItemHeader">
				<div className="ItemTitle">{item.name}</div>
				<div className="ItemContent" />
			</div>
			<div className="ItemBody">
				<Tabs
					defaultActiveKey={item.default}
					id="noanim-tab-example"
					onSelect={(value) => onValueChange(item.id, value, handleChange)}
				>
					{TabTable}
				</Tabs>
			</div>
		</div>
	);

	return ItemsTable;
};

const onValueChange = (id, value, handleChange) => {
	//console.log(id, value);
	handleChange({
		target: {
			name: id,
			value: value
		}
	});
};
