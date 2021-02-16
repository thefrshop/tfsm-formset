import React from 'react';

// 포매터
export const formatter = (cell, row, rowIndex, Data) => {
	var item = Data.item;
	var onChange = Data.onChange;

	return <div dangerouslySetInnerHTML={{ __html: cell }} />;
};
