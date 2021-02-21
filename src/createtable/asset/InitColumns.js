import React from 'react';
import update from 'react-addons-update';
import { ImSortAlphaAsc, ImSortAlphaDesc } from 'react-icons/im';

import * as F_DateTime from '../formatter/DateTime';
import * as F_Switch from '../formatter/Switch';
import * as F_Number from '../formatter/Number';
import * as F_Image from '../formatter/Image';
import * as F_Images from '../formatter/Images';
import * as F_Button from '../formatter/Button';
import * as F_Color from '../formatter/Color';
import * as F_Jsonview from '../formatter/Jsonview';
import * as F_Link from '../formatter/Link';
import * as F_Array from '../formatter/Array';
import * as F_Table from '../formatter/Table';
import * as F_Icon from '../formatter/Icon';
import * as F_Html from '../formatter/Html';

const FormatSet = [
	{ name: 'DateTime', module: F_DateTime },
	{ name: 'Switch', module: F_Switch },
	{ name: 'Number', module: F_Number },
	{ name: 'Image', module: F_Image },
	{ name: 'Images', module: F_Images },
	{ name: 'Button', module: F_Button },
	{ name: 'Color', module: F_Color },
	{ name: 'Jsonview', module: F_Jsonview },
	{ name: 'Link', module: F_Link },
	{ name: 'Array', module: F_Array },
	{ name: 'Table', module: F_Table },
	{ name: 'Icon', module: F_Icon },
	{ name: 'Html', module: F_Html }
];

export const Getformatter = (format) => {
	if (format === undefined) return null;
	//console.log(format);
	return FormatSet.find((m) => m.name.toLowerCase() === format.toLowerCase()).module.formatter;
};

export const InitColumns = (propscolumns, onChange) => {
	var columns = [];
	propscolumns.forEach((item) => {
		var c_item = item;
		var formatter = Getformatter(item.format);
		//console.log(formatter);
		if (formatter !== null) {
			c_item = update(c_item, { formatter: { $set: formatter } });
			c_item = update(c_item, { formatExtraData: { $set: { item: item, onChange: onChange } } });
		}

		c_item = update(c_item, { sortCaret: { $set: Caret } });

		columns.push(c_item);
	});

	//console.log(columns);
	return columns;
};

const Caret = (order) => {
	if (!order) return <span className="Caret" style={{ position: 'absolute', right: '10px', top: '5px' }} />;
	else if (order === 'asc')
		return (
			<span className="Caret" style={{ position: 'absolute', right: '10px', top: '5px' }}>
				<ImSortAlphaAsc color="#238b23" />
			</span>
		);
	else if (order === 'desc')
		return (
			<span className="Caret" style={{ position: 'absolute', right: '10px', top: '5px' }}>
				<ImSortAlphaDesc color="#238b23" />
			</span>
		);
	return null;
};
