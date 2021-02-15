import React from 'react';
import { Image } from 'react-bootstrap';

// 포매터
export const formatter = (cell, row, rowIndex, Data) => {
	var item = Data.item;
	var onChange = Data.onChange;
	const ColorFormat = {
		color: cell
	};
	return <div style={ColorFormat}>{cell}</div>;
};
