import React from 'react';
import NumberFormat from 'react-number-format';

// 포매터
export const formatter = (cell, row, rowIndex, Data) => {
	var item = Data.item;
	var onChange = Data.onChange;

	return (
		<NumberFormat
			value={cell}
			displayType={'text'}
			thousandSeparator={item.thousandSeparator}
			suffix={item.suffix}
			renderText={(value) => <div>{value}</div>}
		/>
	);
};
