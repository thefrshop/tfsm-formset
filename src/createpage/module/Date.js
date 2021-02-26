import React from 'react';
import { Form } from 'react-bootstrap';

//초기화
export const InitData = () => {
	return '';
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode) => {
	return (
		<div className="ItemView" key={index}>
			<div className="ItemTitle">{item.name}</div>
			<div className="ItemContent">
				<Form.Control
					value={values[item.id] || ''}
					className="TextInput"
					required={item.required}
					type="date"
					name={item.id}
					onChange={handleChange}
					{...item.props}
				/>
			</div>
		</div>
	);
};
