import React, { useState } from 'react';
//import * as ImageFile from './asset/ImageFile';
import update from 'react-addons-update';
import { Button, Form, Image, Tab, Tabs } from 'react-bootstrap';
import * as _ from 'lodash';
//초기화
export const InitData = () => {
	return {
		File: '',
		Url: ''
	};
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode, UpdateInitData) => {
	var FileName = values[item.id].FileName;
	var Url = values[item.id].Url;

	var name = '';
	var browseText = '파일 선택';

	if (FileName !== '' && FileName !== undefined) {
		name = FileName;
		browseText = '파일 교체';
	}

	//console.log('ItemsView', values[item.id]);

	return (
		<div className="ItemViewRow" key={index}>
			<div className="ItemHeader">
				<div className="ItemTitle">{item.name}</div>
				<div className="ItemContent">
					<Form.File
						label={name}
						data-browse={browseText}
						onChange={(e) => {
							onChangeFile(e, item.id, UpdateInitData, values);
						}}
						custom
					/>
				</div>
			</div>
		</div>
	);
};

//이미지 체인지
const onChangeFile = (e, id, UpdateInitData, values) => {
	if (e.target.files) {
		var file = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = (val) => {
			var data = {
				FileName: file.name,
				FileData: val.target.result
			};
			UpdateInitData(id, data);
		};
	}
};
