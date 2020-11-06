import React from 'react';

import { CreatePage } from 'tfsm-formset/dist';
import 'tfsm-formset/dist/index.css';
import './App.css';

class App extends React.Component {
	onSubmit = (data) => {
		console.log(data);
	};

	render() {
		return (
			<div className="App">
				<CreatePage DataStruct={ProductDataStruct} onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default App;

const ProductDataStruct = {
	DataType: 'Product',
	FSref: 'Product',
	Struct: [
		{
			id: 'BasicInfo',
			name: '기본 정보',
			format: 'Titletext',
			Items: [
				{
					id: 'ProductNum',
					name: '상품번호',
					format: 'CodeGen'
				},
				{
					id: 'ProductName',
					name: '상품명',
					format: 'Text'
				}
			]
		},
		{
			id: 'SalesInfo',
			name: '판매 정보',
			format: 'Titletext',
			Items: [
				{
					id: 'Price',
					name: '상품가격',
					format: 'Price'
				},
				{
					id: 'Tex',
					name: '과세/비과세',
					format: 'Select',
					SelectText: [ '과세', '비과세' ]
				},
				{
					id: 'SupplyPrice',
					name: '공급단가',
					format: 'Price'
				}
			]
		},
		{
			id: 'SalesInfo',
			name: '표시 정보',
			format: 'Titletext',
			Items: [
				{
					id: 'TitleImage',
					name: '대표 이미지',
					format: 'UploadImage'
				},
				{
					id: 'ImageGallery',
					name: '이미지 갤러리',
					format: 'UploadImage'
				},
				{
					id: 'DetailPage',
					name: '상세페이지',
					format: 'Tab',
					Items: [
						{
							id: 'DetailImage',
							name: '이미지',
							format: 'UploadImage'
						},
						{
							id: 'DetailHtml',
							name: 'HTML',
							format: 'UploadHtml'
						}
					]
				},

				{
					id: 'ProductInfo',
					name: '상품정보고시',
					format: 'Textline'
				}
			]
		}
	]
};
