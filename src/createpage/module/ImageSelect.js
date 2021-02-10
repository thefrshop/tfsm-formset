import React from 'react';
import { Form } from 'react-bootstrap';

//초기화
export const InitData = () => {
	return '';
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode) => {
	return (
		<div className="ItemViewRow" key={index}>
			<div className="ItemHeader">
				<div className="ItemTitle">{item.name}</div>
				<div className="ItemContent" />
			</div>
			<div className="ItemBody">
				<div className="ImageformBox">{M.ImageSelectList(values, item)}</div>
			</div>
		</div>
	);
};
