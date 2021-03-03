import { BsBrightnessHighFill, BsFillAwardFill } from 'react-icons/bs';
import React from 'react';

export const DateTime = [
	{
		dataField: 'createdate',
		text: '시작일',
		sort: true,
		format: 'DateTime',
		Dateformat: 'LL',
		align: 'center'
	}
];

export const DateTimeInit = [
	{
		createdate: '2020-01-01 12:34:56'
	},
	{
		createdate: '2020-01-02 01:23:45'
	}
];
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Switch = [
	{
		dataField: 'onoff',
		text: '스위치',
		sort: true,
		format: 'Switch',
		onlabel: '켬',
		offlabel: '끔',
		onstyle: 'success',
		offstyle: 'warning',
		size: 'sm',
		width: 80,
		align: 'center'
	}
];

export const SwitchInit = [
	{
		onoff: true
	},
	{
		onoff: false
	}
];
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Number = [
	{
		dataField: 'price',
		text: '가격',
		sort: true,
		format: 'Number',
		align: 'center',
		thousandSeparator: true,
		suffix: '원'
	}
];

export const NumberInit = [
	{
		price: 12345
	},
	{
		price: 1122334455
	}
];
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Image = [
	{
		dataField: 'image',
		text: '이미지',
		sort: true,
		format: 'Image',
		align: 'center',
		width: 50,
		height: 50
	}
];

export const ImageInit = [
	{
		image: 'https://shop-phinf.pstatic.net/20200717_47/15949746658893MYpr_JPEG/32336999427478920_808315976.jpg'
	},
	{
		image: 'https://shop-phinf.pstatic.net/20200717_266/15949746704500kuIs_JPEG/32337004039335532_1333175870.jpg'
	}
];
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Images = [
	{
		dataField: 'images',
		text: '이미지',
		sort: true,
		format: 'Images',
		align: 'center',
		width: 50,
		height: 50
	}
];

export const ImagesInit = [
	{
		images: [
			'https://shop-phinf.pstatic.net/20200717_47/15949746658893MYpr_JPEG/32336999427478920_808315976.jpg',
			'https://shop-phinf.pstatic.net/20200717_266/15949746704500kuIs_JPEG/32337004039335532_1333175870.jpg',
			'https://shop-phinf.pstatic.net/20200717_40/1594974670728XHsTz_JPEG/32337004270315102_740479415.jpg',
			'https://shop-phinf.pstatic.net/20200717_134/1594974670975548LS_JPEG/32337004565182638_1968441623.jpg'
		]
	},
	{
		images: [
			'https://shop-phinf.pstatic.net/20200717_47/15949746658893MYpr_JPEG/32336999427478920_808315976.jpg',
			'https://shop-phinf.pstatic.net/20200717_266/15949746704500kuIs_JPEG/32337004039335532_1333175870.jpg',
			'https://shop-phinf.pstatic.net/20200717_40/1594974670728XHsTz_JPEG/32337004270315102_740479415.jpg'
		]
	}
];
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Button = [
	{
		dataField: 'Name',
		text: '이름',
		sort: true,
		format: 'Button',
		align: 'center',
		variant: 'success'
	}
];

export const ButtonInit = [
	{
		Name: '홍길동'
	},
	{
		Name: '김이박'
	}
];
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Color = [
	{
		dataField: 'color',
		text: '색상',
		sort: true,
		format: 'Color',
		align: 'center',
		variant: 'success'
	}
];

export const ColorInit = [
	{
		color: '#00ff55'
	},
	{
		color: '#ff0033'
	}
];
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Jsonview = [
	{
		dataField: 'Json',
		text: 'Json',
		sort: true,
		format: 'Jsonview',
		theme: 'twilight',
		name: 'Struct',
		iconStyle: 'circle'
	}
];

export const JsonInit = [
	{
		Json:
			'{ "colorsArray":[{ "colorName":"red", "hexValue":"#f00" }, { "colorName":"green", "hexValue":"#0f0" }, { "colorName":"blue", "hexValue":"#00f" } ] }'
	},
	{
		Json:
			'{ "name":"Product", "properties": { "id": { "type":"number", "description":"Product identifier", "required":true }, "name": { "description":"Name of the product", "type":"string", "required":true }, "price": { "type":"number", "minimum":0, "required":true }, "tags": { "type":"array", "items": { "type":"string" } } } }'
	}
];
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Link = [
	{
		dataField: 'link',
		text: '바로가기',
		sort: true,
		format: 'Link',
		align: 'center',
		target: '_blank'
	}
];

export const LinkInit = [
	{
		link: 'http://www.naver.com'
	},
	{
		link: 'http://www.google.com'
	}
];
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Link2 = [
	{
		dataField: 'link',
		text: '바로가기 커스텀',
		sort: true,
		format: 'Link',
		align: 'center',
		custom: true,
		color: '#aa88ff'
	}
];

export const LinkInit2 = [
	{
		link: 'http://www.naver.com'
	},
	{
		link: 'http://www.google.com'
	}
];
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Array = [
	{
		dataField: 'array',
		text: 'Array',
		sort: true,
		format: 'Array',
		align: 'center',
		custom: true,
		color: '#aa88ff'
	}
];

export const ArrayInit = [
	{
		array: [ 1, 2, 3, 4, 5 ]
	},
	{
		array: [ 'a', 'b', 'c', 'd' ]
	}
];
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Table = [
	{
		dataField: 'name',
		text: '이름'
	},
	{
		dataField: 'array',
		text: 'Table',
		sort: true,
		format: 'Table',
		align: 'center',
		custom: true,
		color: '#aa88ff'
	}
];

export const TableInit = [
	{
		name: '테이블 1',
		array: {
			keyField: 'a',
			columns: [
				{
					dataField: 'a',
					text: 'a'
				},
				{
					dataField: 'b',
					text: 'b'
				},
				{
					dataField: 'c',
					text: 'c'
				}
			],
			data: [ { a: 1, b: 2, c: 3 }, { a: 2, b: 3, c: 4 }, { a: 5, b: 6, c: 7 } ]
		}
	}
];
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Icon = [
	{
		dataField: 'icon',
		text: 'Icon',
		sort: true,
		format: 'Icon',
		align: 'center',
		icons: [ '●', <BsBrightnessHighFill />, <BsFillAwardFill /> ],
		colors: [ '#0a0', '#ef4836', '#aa88ff' ],
		match: [ 1, 2, 3 ]
	}
];

export const IconInit = [
	{
		icon: 1
	},
	{
		icon: 2
	},
	{
		icon: 3
	},
	{
		icon: 4
	}
];
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Html = [
	{
		dataField: 'html',
		text: 'Html',
		sort: true,
		format: 'Html'
	}
];

export const HtmlInit = [
	{
		html: '<div>1234</div>'
	},
	{
		html: '<div><strong>1234</strong></div>'
	}
];
/////////////////////////////////////////////////////////////////////////////////////////////////////

const custom_Formatter = (cell, row, rowIndex, formatExtraData) => {
	console.log('cell', cell);
	console.log('row', row);
	return <div> custom_Formatter</div>;
};

export const Custom = [
	{
		dataField: 'html',
		text: 'Html',
		sort: true,
		formatter: custom_Formatter
	}
];

export const CustomInit = [
	{
		html: '<div>1234</div>'
	},
	{
		html: '<div><strong>1234</strong></div>'
	}
];
/////////////////////////////////////////////////////////////////////////////////////////////////////
