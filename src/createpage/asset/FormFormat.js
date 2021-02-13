import * as M_CodeGen from '../module/CodeGen';
import * as M_Text from '../module/Text';
import * as M_Date from '../module/Date';
import * as M_Textline from '../module/Textline';
import * as M_Price from '../module/Price';
import * as M_Select from '../module/Select';
import * as M_Hierarchy from '../module/Hierarchy';
import * as M_ListSelect from '../module/ListSelect';
import * as M_ImageSelect from '../module/ImageSelect';
import * as M_UploadImage from '../module/UploadImage';
import * as M_Imageset from '../module/Imageset';
import * as M_HtmlEditer from '../module/HtmlEditer';
import * as M_Tab from '../module/Tab';
import * as M_Child from '../module/Child.js';
import * as M_DatePicker from '../module/DatePicker';
import * as M_Switch from '../module/Switch';
import * as M_Option from '../module/Option';

const FormatSet = [
	{ name: 'CodeGen', module: M_CodeGen },
	{ name: 'Text', module: M_Text },
	{ name: 'Date', module: M_Date },
	{ name: 'Textline', module: M_Textline },
	{ name: 'Price', module: M_Price },
	{ name: 'Select', module: M_Select },
	{ name: 'Hierarchy', module: M_Hierarchy },
	{ name: 'ListSelect', module: M_ListSelect },
	{ name: 'ImageSelect', module: M_ImageSelect },
	{ name: 'UploadImage', module: M_UploadImage },
	{ name: 'Imageset', module: M_Imageset },
	{ name: 'HtmlEditer', module: M_HtmlEditer },
	{ name: 'Tab', module: M_Tab },
	{ name: 'Child', module: M_Child },
	{ name: 'DatePicker', module: M_DatePicker },
	{ name: 'Switch', module: M_Switch },
	{ name: 'Option', module: M_Option }
];

export const GetModule = (format) => {
	return FormatSet.find((m) => m.name === format).module;
};

export const InitData = (item) => {
	return GetModule(item.format).InitData(item);
};

export const ItemsView = (M, index, item, values, handleChange, ModifyMode, ViewCallback) => {
	return GetModule(item.format).ItemsView(M, index, item, values, handleChange, ModifyMode, ViewCallback);
};
