import React from 'react';
import { Button } from 'react-bootstrap';
import { BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs';
// 포매터
export const formatter = (cell, row, rowIndex, Data) => {
	var item = Data.item;
	var onChange = Data.onChange;

	return (
		<div>
			<Button onClick={() => onChange(item.dataField, cell, row, rowIndex, 'onClick')}>
				<BsChevronCompactUp />
			</Button>
			{cell !== undefined ? cell : item.text}
			<Button onClick={() => onChange(item.dataField, cell, row, rowIndex, 'onClick')}>
				<BsChevronCompactDown />
			</Button>
		</div>
	);
};
