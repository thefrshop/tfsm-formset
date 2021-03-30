import React from 'react';
import { Button } from 'react-bootstrap';
import { BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs';
// 포매터
export const formatter = (cell, row, rowIndex, Data) => {
	var item = Data.item;
	var onChange = Data.onChange;

	return (
		<div style={{ display: 'none' }}>
			<Button variant="outline-light" onClick={() => onChange(item.dataField, cell, row, rowIndex, 'Up')}>
				<BsChevronCompactUp />
			</Button>

			{cell !== undefined ? cell : item.text}
			<Button variant="outline-light" onClick={() => onChange(item.dataField, cell, row, rowIndex, 'Down')}>
				<BsChevronCompactDown />
			</Button>
		</div>
	);
};
