import React from 'react';
import { Form } from 'react-bootstrap';

//초기화
export const InitData = () => {
	return '';
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode) => {
	return (
		<div className="ItemViewRow" key={index} style={{ marginBottom: 20 }}>
			<div className="ItemHeader">
				<div className="ItemTitle">{item.name}</div>
				<div className="ItemContent">
					<DatePicker
						name={item.id}
						selected={values[item.id]}
						dateFormat="yyyy-MM-dd HH:mm:ss"
						onChange={(date) =>
							M.setState({
								InitData: update(M.state.InitData, {
									[item.id]: { $set: date }
								})
							})}
						showTimeSelect
					/>
				</div>
			</div>
		</div>
	);
};
