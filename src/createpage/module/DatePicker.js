import React from 'react';
import DatePicker from 'react-datepicker';

//초기화
export const InitData = () => {
	return '';
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode, UpdateInitData) => {
	//console.log(values[item.id]);
	var selected;
	if (values[item.id]) selected = new Date(values[item.id]);
	//console.log(selected);
	return (
		<div className="ItemViewRow" key={index} style={{ marginBottom: 20 }}>
			<div className="ItemHeader">
				<div className="ItemTitle">{item.name}</div>
				<div className="ItemContent">
					<DatePicker
						name={item.id}
						selected={selected}
						dateFormat={item.dateFormat}
						onChange={(date) => UpdateInitData(item.id, date)}
						showTimeSelect={item.showTimeSelect}
						{...item.props}
					/>
				</div>
			</div>
		</div>
	);
};
