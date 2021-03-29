import React from 'react';

export const formatter = (cell, row, rowIndex, Data) => {
	var item = Data.item;
	var onChange = Data.onChange;

	React.useEffect(
		() => {
			const timer = setInterval(() => {
				onChange(item.dataField, cell, row, rowIndex, 'onClick');
			}, 1000);

			return () => clearInterval(timer);
		},
		[ cell, row, rowIndex, Data, onChange ]
	);

	if (cell !== undefined) return <div>{cell}</div>;
};
