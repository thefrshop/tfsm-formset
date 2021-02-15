import React from 'react';

// 포매터
export const formatter = (cell, row, rowIndex, Data) => {
	var item = Data.item;
	var onChange = Data.onChange;

	if (item.custom)
		return (
			<div
				style={{ cursor: 'pointer', color: item.color }}
				onClick={() => onChange(item.dataField, cell, row, rowIndex, 'onClick')}
			>
				{cell}
			</div>
		);
	else
		return (
			<a target={item.target} href={cell}>
				{cell}
			</a>
		);
};
