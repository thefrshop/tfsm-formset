import React, { useState } from 'react';
//import * as ImageFile from './asset/ImageFile';
import update from 'react-addons-update';
import { Button, Form, Image, Tab, Tabs } from 'react-bootstrap';
import * as _ from 'lodash';
//초기화
export const InitData = () => {
	return {
		FileList: [],
		UrlList: []
	};
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode, UpdateInitData) => {
	if (values[item.id].FileList === undefined) values[item.id].FileList = [];

	//console.log('ItemsView', values[item.id]);

	return (
		<div className="ItemViewRow" key={index}>
			<div className="ItemHeader">
				<div className="ItemTitle">{item.name}</div>
				<div className="ItemContent">
					<Form.File
						label={`${values[item.id].FileList.length}개`}
						data-browse="파일 추가"
						onChange={(e) => {
							ImageFileChange(e, item.id, UpdateInitData, values);
						}}
						multiple
						custom
					/>
				</div>
			</div>

			{!ModifyMode ? (
				<div className="ItemBody2">
					<div className="ImageformBox">
						<GetUploagImage values={values} item={item} UpdateInitData={UpdateInitData} />
					</div>
				</div>
			) : (
				<div className="ItemBody2">
					<br />
					<div style={{ paddingBottom: '10px' }}>기존 이미지</div>
					<div className="ImageformBox">
						<GetCurrentImage values={values} item={item} UpdateInitData={UpdateInitData} />
					</div>
					<br />
					<div style={{ paddingBottom: '10px' }}>새 이미지</div>
					<div className="ImageformBox">
						<GetUploagImage values={values} item={item} UpdateInitData={UpdateInitData} />
					</div>
				</div>
			)}
		</div>
	);
};

// 업로드 이미지폼
const GetUploagImage = (props) => {
	const { values, item, UpdateInitData } = props;

	const [ isShown, setIsShown ] = useState(false);

	let images = [];

	var FileList = values[item.id].FileList;
	//console.log('GetImage', values[item.id]);
	FileList.forEach((value, index) => {
		images.push(
			<div className="Imageform" key={'UP' + index}>
				<Image
					className="ImageformImage"
					variant="top"
					src={value.url}
					onMouseEnter={() => setIsShown('UP' + index)}
					onMouseLeave={() => setIsShown(false)}
				/>
				<div className="ImageformTitle">{value.file.name}</div>
				{isShown === 'UP' + index && (
					<div className="ImageformPop">
						<Image variant="top" src={value.url} />
						<div>{value.file.name}</div>
					</div>
				)}
				<Button
					className="ImageformXBTN"
					onClick={() => {
						var Fi = _.concat(values[item.id].FileList);
						var Ur = _.concat(values[item.id].UrlList);

						Up.splice(index, 1);
						Fi.splice(index, 1);
						var data = {
							UrlList: Ur,
							FileList: Fi
						};
						UpdateInitData(item.id, data);
					}}
				>
					x
				</Button>
			</div>
		);
	});

	return images;
};

getFilename = (url) => {
	var ext = url.split('/').pop();
	if (ext === url) return '';
	return ext;
};

// 기존 이미지폼
const GetCurrentImage = (props) => {
	const { values, item, UpdateInitData } = props;
	//console.log(values);

	const [ isShown, setIsShown ] = useState(false);

	let images = [];
	var UrlList = values[item.id].UrlList;
	UrlList.forEach((value, index) => {
		images.push(
			<div className="Imageform" key={'UR' + index}>
				<Image
					className="ImageformImage"
					variant="top"
					src={value}
					onMouseEnter={() => setIsShown('UR' + index)}
					onMouseLeave={() => setIsShown(false)}
				/>
				<div className="ImageformTitle">{getFilename(value)}</div>
				{isShown === 'UR' + index && (
					<div className="ImageformPop">
						<Image variant="top" src={value} />
						<div>{value}</div>
					</div>
				)}
				<Button
					className="ImageformXBTN"
					onClick={() => {
						var Fi = _.concat(values[item.id].FileList);
						var Ur = _.concat(values[item.id].UrlList);
						Ur.splice(index, 1);
						var data = {
							UrlList: Ur,
							FileList: Fi
						};
						UpdateInitData(item.id, data);
					}}
				>
					x
				</Button>
			</div>
		);
	});
	return images;
};

//이미지 체인지
const ImageFileChange = (e, id, UpdateInitData, values) => {
	if (e.target.files) {
		[].forEach.call(e.target.files, (file) => {
			let reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = (e) => {
				var data = update(values[id], {
					FileList: {
						$push: [ { file: file, url: e.target.result } ]
					}
				});
				UpdateInitData(id, data);
			};
		});
	}
};
