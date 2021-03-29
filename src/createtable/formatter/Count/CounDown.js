import React from 'react';
import moment from 'moment-timezone';
import 'moment/locale/ko';

export default (Count = (props) => {
	const { cell, row, rowIndex, Data } = props;

	const [ until, setuntil ] = React.useState(0);
	const [ lastUntil, setlastUntil ] = React.useState(null);

	var item = Data.item;
	var onChange = Data.onChange;

	React.useEffect(() => {
		const timer = setInterval(() => {
			if (lastUntil === until) {
				return;
			}
			if (until === 1 || (until === 0 && lastUntil !== 1)) {
				onChange(item.dataField, cell, row, rowIndex, 'onClick');
			}

			if (until === 0) {
				setlastUntil(0);
				setuntil(0);
			} else {
				setlastUntil(until);
				setuntil(Math.max(0, until - 1));
			}
		}, 1000);

		var d = '';
		var date = moment().format('YYYY-MM-DD HH:mm:ss'); // 현재 시간
		var diffr = moment.duration(moment(cell).diff(moment(date)));
		var hours = parseInt(diffr.asHours());
		var minutes = parseInt(diffr.minutes());
		var seconds = parseInt(diffr.seconds());
		d = hours * 60 * 60 + minutes * 60 + seconds; //마감날짜 - 현재날짜 초 단위

		setuntil(Math.max(d, 0));
		return () => clearInterval(timer);
	});

	if (cell !== undefined) return <div>{until}</div>;
});
