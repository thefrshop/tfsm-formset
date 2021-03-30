import React from 'react';
import { Button } from 'react-bootstrap';
import { BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs';
// 포매터
export const formatter = (cell, row, rowIndex, Data) => {
	var item = Data.item;
	var onChange = Data.onChange;

	return (
		<div>
			<Button variant="outline-dark" onClick={() => onChange(item.dataField, cell, row, rowIndex, 'Up')}>
				<BsChevronCompactUp />
			</Button>
			<div style={{ margin: 5 }}>{cell !== undefined ? cell : item.text}</div>
			<Button variant="outline-dark" onClick={() => onChange(item.dataField, cell, row, rowIndex, 'Down')}>
				<BsChevronCompactDown />
			</Button>
		</div>
	);
};
