import React from 'react';

export const getStructFromFormat = (DataStruct, FormatName) => {
	return getFormat(DataStruct.Struct, FormatName);
};

const getFormat = (DataStruct, FormatName) => {
	let sttable = [];
	DataStruct.forEach((item) => {
		if (item.format === FormatName) {
			sttable.push(item);
		} else if (item.format === 'Tab' || item.format === 'Titletext') {
			var TabData = getFormat(item.Items, FormatName);
			sttable = Object.assign(sttable, TabData);
		}
	});
	return sttable;
};
