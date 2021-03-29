import React from 'react';
import CountDown from './CounDown';
import moment from 'moment';

export const formatter = (cell, row, rowIndex, Data) => {
	var item = Data.item;
	var onChange = Data.onChange;

	var d = '';
	var date = moment().format('YYYY-MM-DD HH:mm:ss'); // 현재 시간
	var diffr = moment.duration(moment(cell).diff(moment(date)));
	var hours = parseInt(diffr.asHours());
	var minutes = parseInt(diffr.minutes());
	var seconds = parseInt(diffr.seconds());
	d = hours * 60 * 60 + minutes * 60 + seconds; //마감날짜 - 현재날짜 초 단위

	if (cell !== undefined)
		return (
			<CountDown
				until={d}
				onFinish={() => {
					onChange(item.dataField, cell, row, rowIndex, 'CountFinish');
				}}
			/>
		);
};
