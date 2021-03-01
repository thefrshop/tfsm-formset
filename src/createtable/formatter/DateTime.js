import React from 'react';
import moment from 'moment-timezone';
import 'moment/locale/ko';

// 포매터
export const formatter = (cell, row, rowIndex, Data) => {
	var item = Data.item;
	var onChange = Data.onChange;

	var Dateformat = item.Dateformat;
	if (Dateformat === undefined) Dateformat = 'YYYY-MM-D';

	var OutDate = moment(cell);

	if (cell === '' || cell === undefined) return <div />;
	return <div>{OutDate.format(Dateformat)}</div>;
};
