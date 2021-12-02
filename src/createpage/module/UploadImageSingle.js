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
	var File = values[item.id].File;
	var Url = values[item.id].Url;

	var name = '';
	var browseText = '이미지 추가';

	if (File !== '' && File !== undefined) {
		name = File.name;
	}
	if (Url !== '' && Url !== undefined) {
		browseText = '이미지 교체';
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
							ImageFileChange(e, item.id, UpdateInitData, values);
						}}
						custom
					/>
				</div>
			</div>
			<GetUploagImage values={values} item={item} UpdateInitData={UpdateInitData} />
		</div>
	);
};

// 업로드 이미지폼
const GetUploagImage = (props) => {
	const { values, item, UpdateInitData } = props;

	const [ isShown, setIsShown ] = useState(false);

	var images = '';

	var File = values[item.id].File;
	var Url = values[item.id].Url;
	//console.log(Url);

	var name = '';
	if (Url !== '' && Url !== undefined) name = Url;

	if (File !== '' && File !== undefined) name = File.name;
	//console.log('name', name);
	//console.log('GetImage', values[item.id]);
	if (Url !== '' && Url !== undefined) {
		images = (
			<div className="ImageformSingle">
				<Image
					className="ImageformSingleImage"
					variant="top"
					src={Url}
					onMouseEnter={() => setIsShown('UP')}
					onMouseLeave={() => setIsShown(false)}
				/>
				{isShown === 'UP' && (
					<div className="ImageformPop">
						<Image variant="top" src={Url} />
						<div>{name}</div>
					</div>
				)}
			</div>
		);
	} else {
		images = (
			<div className="ImageformSingle">
				<Image
					className="ImageformSingleImage"
					variant="top"
					src={File.FileData}
					onMouseEnter={() => setIsShown('UP')}
					onMouseLeave={() => setIsShown(false)}
				/>
				{isShown === 'UP' && (
					<div className="ImageformPop">
						<Image variant="top" src={Url} />
						<div>{name}</div>
					</div>
				)}
			</div>
		);
	}

	return (
		<div className="ItemBody2">
			<div className="ImageformBox" style={{ flexDirection: 'column' }}>
				{images}
				<div className="ImageformTitle">{name}</div>
			</div>
		</div>
	);
};

//이미지 체인지
const ImageFileChange = (e, id, UpdateInitData, values) => {
	if (e.target.files) {
		[].forEach.call(e.target.files, (file) => {
			let reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = (e) => {
				var data = {
					File: {
						FileName: file.name,
						FileData: e.target.result
					}
				};
				UpdateInitData(id, data);
			};
		});
	}
};
