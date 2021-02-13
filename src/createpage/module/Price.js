import React from 'react';
import NumberFormat from 'react-number-format';

//초기화
export const InitData = () => {
	return '';
};

const onValueChange = (id, value, handleChange) => {
	//console.log(id, value.value);
	handleChange({
		target: {
			name: id,
			value: value.value
		}
	});
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode) => {
	return (
		<div className="ItemView" key={index}>
			<div className="ItemTitle">{item.name}</div>
			<div className="ItemContent">
				<NumberFormat
					required={item.required}
					className="TextInput form-control"
					value={values[item.id]}
					thousandSeparator={item.Separator}
					suffix={item.suffix}
					onValueChange={(value) => onValueChange(item.id, value, handleChange)}
				/>
			</div>
		</div>
	);
};
