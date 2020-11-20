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
			TabData.forEach((tbaitem) => {
				sttable.push(tbaitem);
			});
		}
	});

	return sttable;
};

export const getIDList = (DataStruct) => {
	return getID(DataStruct.Struct);
};

const getID = (DataStruct) => {
	let IDList = [];
	DataStruct.forEach((item) => {
		if (item.format === 'Tab' || item.format === 'Titletext') {
			var TabData = getID(item.Items);
			TabData.forEach((tbaitem) => {
				IDList.push(tbaitem);
			});
		} else {
			IDList.push(item.id);
		}
	});

	return IDList;
};
