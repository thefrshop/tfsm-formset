import React from 'react';
import ReactJson from 'react-json-view';

// 포매터
export const formatter = (cell, row, rowIndex, Data) => {
	var item = Data.item;
	var onChange = Data.onChange;

	var jsondata;
	if (typeof cell === 'object') {
		jsondata = cell;
	} else if (typeof cell === 'string') {
		try {
			jsondata = JSON.parse(cell);
		} catch (exception) {
			jsondata = 'error';
		}
	}

	return <ReactJson {...item} src={jsondata} style={{ textAlign: 'left' }} />;
};
