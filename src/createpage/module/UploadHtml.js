import React from 'react';
//import * as ImageFile from './asset/ImageFile';
import { Button, Form, Image, Tab, Tabs } from 'react-bootstrap';

//초기화
export const InitData = () => {
	return {
		UploadInfo: [],
		FileList: []
	};
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode) => {
	return (
		<div className="ItemViewRow" key={index}>
			<div className="ItemHeader">
				<div className="ItemTitle">{item.name}</div>
				<div className="ItemContent">
					<Form.File
						label={`${values[item.id].UploadInfo.length}개`}
						data-browse="+"
						onChange={(e) => {
							//ImageFile.ImageFileChange(e, item.id);
						}}
						multiple
						custom
					/>
				</div>
			</div>
			<div className="ItemBody">
				<div className="ImageformBox">{GetImage(values, item)}</div>
			</div>
		</div>
	);
};

// 업로드 이미지폼
const GetImage = (values, item) => {
	let images = [];
	var UploadInfo = values[item.id].UploadInfo;

	UploadInfo.forEach((value, index) => {
		images.push(
			<div className="Imageform" key={index}>
				<Image className="ImageformImage" variant="top" src={value.url} />
				<div className="ImageformTitle">{value.name}</div>
				<Button
					className="ImageformXBTN"
					onClick={() => {
						//this.remove(value, index);
					}}
				>
					x
				</Button>
			</div>
		);
	});
	return images;
};
