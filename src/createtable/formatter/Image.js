import React from 'react';
import { Image } from 'react-bootstrap';

// 포매터
export const formatter = (cell, row, rowIndex, Data) => {
	var item = Data.item;
	var onChange = Data.onChange;

	return (
		<Image
			src={cell}
			width={item.width}
			height={item.height}
			onMouseEnter={() => onChange(item.dataField, cell, row, rowIndex, 'onMouseEnter')}
			onMouseLeave={() => onChange(item.dataField, cell, row, rowIndex, 'onMouseLeave')}
		/>
	);
};
