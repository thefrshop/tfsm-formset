import React from 'react';
import { Image } from 'react-bootstrap';

// 포매터
export const formatter = (cell, row, rowIndex, Data) => {
	var item = Data.item;
	var onChange = Data.onChange;

	//console.log(typeof cell);

	var celldata = [];
	if (typeof cell === 'object') {
		celldata = cell;
	} else if (typeof cell === 'string') {
		try {
			celldata = JSON.parse(cell);
		} catch (exception) {
			celldata = [];
		}
	}

	return (
		<div>
			{celldata.map((value, index) => {
				return (
					<Image
						key={item.dataField + index}
						style={{ margin: 5, cursor: 'pointer' }}
						src={value}
						width={item.width}
						height={item.height}
						onClick={() => onChange(item.dataField, cell, row, rowIndex, 'onClick:' + index)}
						onMouseEnter={() => onChange(item.dataField, cell, row, rowIndex, 'onMouseEnter:' + index)}
						onMouseLeave={() => onChange(item.dataField, cell, row, rowIndex, 'onMouseLeave:' + index)}
					/>
				);
			})}
		</div>
	);
};
