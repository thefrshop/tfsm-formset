import React from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

// 포매터
export const formatter = (cell, row, rowIndex, Data) => {
	var item = Data.item;
	var onChange = Data.onChange;
	if (cell !== undefined)
		return (
			<BootstrapSwitchButton
				onlabel={item.onlabel}
				onstyle={item.onstyle}
				offlabel={item.offlabel}
				offstyle={item.offstyle}
				checked={cell}
				width={item.width}
				height={item.height}
				size={item.size}
				style={item.style}
				onChange={(value) => onChange(item.dataField, cell, row, rowIndex, value)}
			/>
		);
};
