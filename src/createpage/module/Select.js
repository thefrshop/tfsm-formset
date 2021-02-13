import React from 'react';
import { Form } from 'react-bootstrap';

//초기화
export const InitData = (item) => {
	return item.SelectText[0];
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode) => {
	return (
		<div className="ItemView" key={index}>
			<div className="ItemTitle">{item.name}</div>
			<div className="ItemContent">
				<Form.Control
					value={values[item.id]}
					className="TextSelect"
					required={item.required}
					custom
					as="select"
					name={item.id}
					onChange={handleChange}
				>
					{GetOption(item.SelectText)}
				</Form.Control>
			</div>
		</div>
	);
};

// 옵션폼
const GetOption = (SelectText) => {
	let opt = [];
	SelectText.forEach((SelectText, index) => {
		opt.push(<option key={index}>{SelectText}</option>);
	});
	return opt;
};
