import React from 'react';
import CountDown from './CounDown';

export const formatter = (cell, row, rowIndex, Data) => {
	if (cell !== undefined) return <CountDown cell={cell} row={row} rowIndex={rowIndex} Data={Data} />;
};
