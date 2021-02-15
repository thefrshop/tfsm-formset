import React from 'react';
import { Button } from 'react-bootstrap';

// 포매터
export const formatter = (cell, row, rowIndex, Data) => {
	var item = Data.item;
	var onChange = Data.onChange;

	return (
		<Button variant={item.variant} onClick={() => onChange(item.dataField, cell, row, rowIndex, 'onClick')}>
			{cell}
		</Button>
	);
};
