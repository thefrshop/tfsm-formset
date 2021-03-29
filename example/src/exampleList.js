/////////////////////////////////////////////////////////////////////////////////////////////////////
export const CodeGen = {
	Struct: [
		{
			id: 'BasicInfo',
			name: 'CodeGen',
			format: 'Titletext',
			Items: [
				{
					id: 'ProductNum',
					name: '상품번호',
					format: 'CodeGen',
					prefix: 'Code-'
				}
			]
		}
	]
};

export const CodeGenInit = { ProductNum: '12345' };
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Text = {
	Struct: [
		{
			id: 'BasicInfo',
			name: 'Text',
			format: 'Titletext',
			Items: [
				{
					id: 'ProductName',
					name: '상품명',
					format: 'Text',
					props: { readOnly: true }
				}
			]
		}
	]
};

export const TextInit = { ProductName: '안녕하세요' };
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Price = {
	Struct: [
		{
			id: 'BasicInfo',
			name: 'Price',
			format: 'Titletext',
			Items: [
				{
					id: 'Price',
					name: '상품가격',
					format: 'Price',
					suffix: '원',
					Separator: true
				}
			]
		}
	]
};

export const PriceInit = { Price: '1000' };
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Hierarchy = {
	Struct: [
		{
			id: 'BasicInfo',
			name: 'Hierarchy',
			format: 'Titletext',
			Items: [
				{
					id: 'Category',
					name: '상품분류',
					format: 'Hierarchy',
					HierarchyData: {
						name: [ '대분류', '중분류', '소분류' ],
						viewField: 'Name'
					}
				}
			]
		}
	]
};

export const HierarchyLast = {
	Struct: [
		{
			id: 'BasicInfo',
			name: 'Hierarchy',
			format: 'Titletext',
			Items: [
				{
					id: 'Category',
					name: '상품분류',
					format: 'Hierarchy',
					HierarchyData: {
						name: [ '대분류', '중분류', '소분류' ],
						viewField: 'Name',
						LastMulti: true
					}
				}
			]
		}
	]
};

export const HierarchySample = {
	Category: [
		[
			{ Code: '1', Name: '1', lev: 0, pid: 0, key: 'sKItoqKJnAbTnGVP3mfM' },

			{ Code: '11', pid: 0, lev: 0, Name: '11', key: 'mlX5LMJgMf7FVqBRODBq' },

			{ Name: '111', pid: 0, Code: '111', lev: 0, key: 'RSeghKOWqnOojJxljSFu' }
		],
		[
			{ Code: '2', pid: 'sKItoqKJnAbTnGVP3mfM', lev: 1, Name: '2', key: 'bvA6fuaFER7IQvpoCOSt' },

			{ Code: '22', lev: 1, Name: '22', pid: 'sKItoqKJnAbTnGVP3mfM', key: '6tAxuc4g2GwcA8AuJV1d' }
		],
		[
			{ pid: 'bvA6fuaFER7IQvpoCOSt', Name: '33', lev: 2, Code: '33', key: '0HANo5pGWvHBLuonzePR' },
			{ pid: 'bvA6fuaFER7IQvpoCOSt', Name: '33', lev: 2, Code: '34', key: '0HA23233WvHBLuonzePR' }
		]
	]
};

export const HierarchyInit = {
	Category: [
		{ Code: '1', Name: '1', lev: 0, pid: 0, key: 'sKItoqKJnAbTnGVP3mfM' },
		{ Code: '2', pid: 'sKItoqKJnAbTnGVP3mfM', lev: 1, Name: '2', key: 'bvA6fuaFER7IQvpoCOSt' },
		{ pid: 'bvA6fuaFER7IQvpoCOSt', Name: '33', lev: 2, Code: '33', key: '0HANo5pGWvHBLuonzePR' }
	]
};
export const HierarchyLastInit = {
	Category: [
		{ Code: '1', Name: '1', lev: 0, pid: 0, key: 'sKItoqKJnAbTnGVP3mfM' },
		{ Code: '2', pid: 'sKItoqKJnAbTnGVP3mfM', lev: 1, Name: '2', key: 'bvA6fuaFER7IQvpoCOSt' },
		{ pid: 'bvA6fuaFER7IQvpoCOSt', Name: '33', lev: 2, Code: '33', key: '0HANo5pGWvHBLuonzePR' },
		{ pid: 'bvA6fuaFER7IQvpoCOSt', Name: '33', lev: 2, Code: '34', key: '0HA23233WvHBLuonzePR' }
	]
};
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const ListSelect = {
	Struct: [
		{
			id: 'BasicInfo',
			name: 'ListSelect',
			format: 'Titletext',
			Items: [
				{
					id: 'Supply',
					name: '생산자',
					format: 'ListSelect',
					dataprops: 'ListData',
					columns: [
						{
							dataField: 'Code',
							text: '분류 코드'
						},
						{
							dataField: 'Name',
							text: '분류 이름'
						}
					],
					keyField: 'Code',
					viewField: 'Name'
				}
			]
		}
	]
};

export const ListSelectInit = {
	Supply: { Code: 'sss', Name: 'ss' }
};
export const ListData = [ { Code: 'sss1', Name: 'ss' }, { Code: 'sss2', Name: 'ss' }, { Code: 'sss3', Name: 'ss' } ];
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Child = {
	Struct: [
		{
			id: 'BasicInfo',
			name: 'Child',
			format: 'Titletext',
			Items: [
				{
					id: 'Child1',
					key: 'Child1',
					format: 'Child'
				},
				{
					id: 'Child2',
					key: 'Child2',
					format: 'Child'
				}
			]
		}
	]
};
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Select = {
	Struct: [
		{
			id: 'BasicInfo',
			name: 'Select',
			format: 'Titletext',
			Items: [
				{
					id: 'Tex',
					name: '과세/비과세',
					format: 'Select',
					SelectText: [ '과세', '비과세' ]
				}
			]
		}
	]
};

export const SelectInit = { Tex: '비과세' };
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const UploadImage = {
	Struct: [
		{
			id: 'BasicInfo',
			name: 'UploadImage',
			format: 'Titletext',
			Items: [
				{
					id: 'TitleImage',
					name: '대표 이미지',
					format: 'UploadImage'
				}
			]
		}
	]
};

export const UploadImageInit = {
	TitleImage: {
		UrlList: [
			'https://shop-phinf.pstatic.net/20200717_47/15949746658893MYpr_JPEG/32336999427478920_808315976.jpg',
			'https://shop-phinf.pstatic.net/20200717_266/15949746704500kuIs_JPEG/32337004039335532_1333175870.jpg',
			'https://shop-phinf.pstatic.net/20200717_40/1594974670728XHsTz_JPEG/32337004270315102_740479415.jpg',
			'https://shop-phinf.pstatic.net/20200717_134/1594974670975548LS_JPEG/32337004565182638_1968441623.jpg'
		]
	}
};
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Imageset = {
	Struct: [
		{
			id: 'BasicInfo',
			name: 'Imageset',
			format: 'Titletext',
			Items: [
				{
					id: 'Imageset',
					name: '대표 이미지',
					format: 'Imageset'
				}
			]
		}
	]
};

export const ImagesetInit = {
	Imageset: [
		'https://shop-phinf.pstatic.net/20200717_47/15949746658893MYpr_JPEG/32336999427478920_808315976.jpg',
		'https://shop-phinf.pstatic.net/20200717_266/15949746704500kuIs_JPEG/32337004039335532_1333175870.jpg',
		'https://shop-phinf.pstatic.net/20200717_40/1594974670728XHsTz_JPEG/32337004270315102_740479415.jpg',
		'https://shop-phinf.pstatic.net/20200717_134/1594974670975548LS_JPEG/32337004565182638_1968441623.jpg'
	]
};
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Tab = {
	Struct: [
		{
			id: 'BasicInfo',
			name: 'Tab',
			format: 'Titletext',
			Items: [
				{
					id: 'TabPage',
					name: 'Tab페이지',
					format: 'Tab',
					default: 'Tab2',
					Items: [
						{
							id: 'Tab1',
							name: '상품명',
							format: 'Text'
						},
						{
							id: 'Tab2',
							name: '상품번호',
							format: 'CodeGen',
							prefix: 'Code-'
						}
					]
				}
			]
		}
	]
};
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Textline = {
	Struct: [
		{
			id: 'BasicInfo',
			name: 'Textline',
			format: 'Titletext',
			Items: [
				{
					id: 'Info',
					name: 'Info',
					format: 'Textline'
				}
			]
		}
	]
};

export const TextlineInit = { Info: '안녕하세요\n\n안녕하세요\n' };
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Date = {
	Struct: [
		{
			id: 'BasicInfo',
			name: 'Date',
			format: 'Titletext',
			Items: [
				{
					id: 'Date',
					name: 'Date',
					format: 'Date'
				}
			]
		}
	]
};

export const DateInit = { Date: '2011-11-12' };
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Option = {
	Struct: [
		{
			id: 'BasicInfo',
			name: 'Option',
			format: 'Titletext',
			Items: [
				{
					id: 'Option',
					name: 'Option',
					format: 'Option'
				}
			]
		}
	]
};

export const OptionInit = { Option: '안녕하세요,안녕하세요,' };
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const Switch = {
	Struct: [
		{
			id: 'BasicInfo',
			name: 'Switch',
			format: 'Titletext',
			Items: [
				{
					id: 'Switch',
					name: '스위치',
					format: 'Switch',
					onlabel: '켬',
					offlabel: '끔',
					onstyle: 'success',
					offstyle: 'warning',
					size: 'sm',
					width: 80
				}
			]
		}
	]
};

export const SwitchInit = { Switch: true };
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const DatePicker = {
	Struct: [
		{
			id: 'BasicInfo',
			name: 'DatePicker',
			format: 'Titletext',
			Items: [
				{
					id: 'DatePicker',
					name: '타이머',
					format: 'DatePicker',
					showTimeSelect: true,
					dateFormat: 'yyyy-MM-dd HH:mm:ss'
				}
			]
		}
	]
};

export const DatePickerInit = { DatePicker: '2021-02-14 04:00:00' };
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const HtmlEditer = {
	Struct: [
		{
			id: 'BasicInfo',
			name: 'HtmlEditer',
			format: 'Titletext',
			Items: [
				{
					id: 'HtmlEditer',
					name: 'Html',
					format: 'HtmlEditer'
				}
			]
		}
	]
};

export const HtmlEditerInit = {
	HtmlEditer: '<p><strong>안녕하세요.</strong></p>↵<p>테스트 입니다.</p>'
};
/////////////////////////////////////////////////////////////////////////////////////////////////////
export const UploadImageSingle = {
	Struct: [
		{
			id: 'BasicInfo',
			name: 'UploadImageSingle',
			format: 'Titletext',
			Items: [
				{
					id: 'SingleImage',
					name: '대표 이미지',
					format: 'UploadImageSingle'
				}
			]
		}
	]
};

export const UploadImageSingleInit = {
	SingleImage: {
		Url: 'https://shop-phinf.pstatic.net/20200717_47/15949746658893MYpr_JPEG/32336999427478920_808315976.jpg'
	}
};
