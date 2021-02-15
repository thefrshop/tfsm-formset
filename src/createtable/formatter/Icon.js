import React from 'react';

// 포매터
export const formatter = (cell, row, rowIndex, Data) => {
	var item = Data.item;
	var onChange = Data.onChange;

	var index = item.match.findIndex((m) => m === cell);
	if (index === -1) return '';
	else return <div style={{ color: item.colors[index] }}>{item.icons[index]}</div>;
};
