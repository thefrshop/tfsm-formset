import React from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

//초기화
export const InitData = () => {
	return '';
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode, UpdateInitData) => {
	return (
		<div className="ItemViewRow" key={index} style={{ marginBottom: 20 }}>
			<div className="ItemHeader">
				<div className="ItemTitle">{item.name}</div>
				<div className="ItemContent">
					<DatePicker
						name={item.id}
						selected={values[item.id]}
						dateFormat="yyyy-MM-dd HH:mm:ss"
						onChange={(date) => UpdateInitData(item.id, date)}
						showTimeSelect
					/>
				</div>
			</div>
		</div>
	);
};
