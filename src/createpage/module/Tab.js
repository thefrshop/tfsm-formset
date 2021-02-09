import { InitItemsSet } from '../asset/InitItemsSet';

//초기화
export const InitData = (item) => {
	var TabData = InitItemsSet(item.Items);
	Object.assign(InitData, TabData);
	return TabData;
};
