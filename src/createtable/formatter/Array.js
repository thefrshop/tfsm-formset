import React from 'react';

// 포매터
export const formatter = (cell, row, rowIndex, Data) => {
	var item = Data.item;
	var onChange = Data.onChange;
	if (cell !== undefined)
		return (
			<div>
				{cell.map((value, index) => {
					return (
						<div key={index} style={{ marginBottom: 5 }}>
							{index} : {value}
						</div>
					);
				})}
			</div>
		);
};
