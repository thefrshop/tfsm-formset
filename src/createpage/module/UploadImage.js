import React from 'react';
//import * as ImageFile from './asset/ImageFile';
import update from 'react-addons-update';
import { Button, Form, Image, Tab, Tabs } from 'react-bootstrap';

//초기화
export const InitData = () => {
	return {
		UploadInfo: [],
		FileList: []
	};
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode, UpdateInitData) => {
	//console.log('ItemsView', values[item.id]);

	return (
		<div className="ItemViewRow" key={index}>
			<div className="ItemHeader">
				<div className="ItemTitle">{item.name}</div>
				<div className="ItemContent">
					<Form.File
						label={`${values[item.id].UploadInfo.length}개`}
						data-browse="+"
						onChange={(e) => {
							ImageFileChange(e, item.id, UpdateInitData, values);
						}}
						multiple
						custom
					/>
				</div>
			</div>
			<div className="ItemBody">
				<div className="ImageformBox">{GetImage(values, item, UpdateInitData)}</div>
			</div>
		</div>
	);
};

// 업로드 이미지폼
const GetImage = (values, item, UpdateInitData) => {
	let images = [];
	var UploadInfo = values[item.id].UploadInfo;
	//console.log('GetImage', values[item.id]);
	UploadInfo.forEach((value, index) => {
		images.push(
			<div className="Imageform" key={index}>
				<Image className="ImageformImage" variant="top" src={value.url} />
				<div className="ImageformTitle">{value.name}</div>
				<Button
					className="ImageformXBTN"
					onClick={() => {
						var Up = values[item.id].UploadInfo;
						var Fi = values[item.id].FileList;
						Up.splice(index, 1);
						Fi.splice(index, 1);
						var data = {
							UploadInfo: Up,
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
					UploadInfo: {
						$push: [ { name: file.name, url: e.target.result, value: e.target.files } ]
					},
					FileList: { $push: [ file ] }
				});
				UpdateInitData(id, data);
			};
		});
	}
};
