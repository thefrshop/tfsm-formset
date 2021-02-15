import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

// 포매터
export const formatter = (cell, row, rowIndex, Data) => {
	var item = Data.item;
	var onChange = Data.onChange;
	return <BootstrapTable keyField={cell.keyField} data={cell.data} columns={cell.columns} />;
};
