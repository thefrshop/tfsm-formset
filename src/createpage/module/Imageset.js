import React from 'react';
import { Button, Form, Image, Tab, Tabs } from 'react-bootstrap';

//초기화
export const InitData = () => {
	return '';
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode, ViewCallback) => {
	return (
		<div className="ItemViewRow" key={index}>
			<div className="ItemHeader">
				<div className="ItemTitle">{item.name}</div>
			</div>
			<div className="ItemBody">
				<div className="ImageformBox">{ListImage(values, item, ViewCallback)}</div>
			</div>
		</div>
	);
};

// 이미지 리스트폼
ListImage = (values, item, ViewCallback) => {
	//console.log('ListImage', item.id);

	//console.log('ListImage', values[item.id]);

	if (values[item.id] === undefined) values[item.id] = [];
	let images = [];
	values[item.id].forEach((value, index) => {
		images.push(
			<div className="Imageform" key={index}>
				<Image className="ImageformImage" variant="top" src={value} />
				<div className="ImageformTitle">{value.name}</div>
				<Button
					className="ImageformXBTN"
					onClick={() => {
						ViewCallback(item.id, [ index, 1 ], 'splice');
					}}
				>
					x
				</Button>
			</div>
		);
	});

	return images;
};
