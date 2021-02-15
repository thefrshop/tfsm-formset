import React from 'react';
import styles from './styles.module.css';

export { default as CreatePage } from './createpage/CreatePage';
export { default as CreateTable } from './createtable/CreateTable';
export { getStructFromFormat, getIDList, getIFList } from './CreatePage/UtilSet';

export const ExampleComponent = ({ text }) => {
	return <div className={styles.test}>Example Component: {text}</div>;
};
