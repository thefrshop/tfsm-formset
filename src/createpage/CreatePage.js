import React from 'react';
import update from 'react-addons-update';

import ProductCodeGen from './ProductCodeGen';
import './CreatePage.css';

import CatSelected from './CatSelected';
import { Button, Form, Image, Tab, Tabs } from 'react-bootstrap';

class CreatePage extends React.Component {
	constructor(props) {
		super(props);

		this.Submitbtn = React.createRef();

		if (this.props.Submit !== undefined) this.props.Submit(() => this.Submit());

		this.state = {
			ModifyMode: false,
			isloading: false,
			create_state: 0,
			InitData: this.InitDataSet(this.props.DataStruct.Struct),
			imagefile: [],
			htmlfile: null,
			deleteimage: []
		};
	}
	Submit = () => {
		this.Submitbtn.current.click();
	};

	// 타입별 데이터 초기화
	InitDataSet = (Struct) => {
		var InitData = {};
		Struct.forEach((StructItems) => {
			InitData = Object.assign(InitData, this.InitItemsSet(StructItems.Items));
		});
		return InitData;
	};

	// 타입별 아이템 초기화
	InitItemsSet = (Struct) => {
		var InitData = {};
		Struct.forEach((item) => {
			if (item.format === 'Text') {
				InitData[item.id] = '';
			} else if (item.format === 'UploadImage') {
				InitData[item.id] = {
					UploadInfo: [],
					FileList: []
				};
			} else if (item.format === 'Hierarchy') {
				InitData[item.id] = [];
			} else if (item.format === 'UploadHtml') {
				InitData[item.id] = {
					UploadInfo: [],
					FileList: []
				};
			} else if (item.format === 'Price') {
				InitData[item.id] = '';
			} else if (item.format === 'Tab') {
				var TabData = this.InitItemsSet(item.Items);
				InitData = Object.assign(InitData, TabData);
			} else if (item.format === 'Textline') {
				InitData[item.id] = '';
			} else if (item.format === 'Select') {
				InitData[item.id] = item.SelectText[0];
			}
		});
		return InitData;
	};

	// 타입별 팝업 초기화
	InitPopupSet = (Struct) => {
		let InitPopup = {};
		Struct.forEach((StructItems) => {
			StructItems.Items.forEach((item, index) => {
				if (item.format === 'Hierarchy') {
					InitPopup[item.id] = false;
				}
			});
		});
		return InitPopup;
	};

	ItemsView = (Struct, values, handleChange) => {
		//console.log(Struct);

		let ItemsTable = [];
		Struct.forEach((item, index) => {
			if (item.format === 'CodeGen')
				ItemsTable.push(
					<div className="ItemView" key={index}>
						<div className="ItemTitle">{item.name}</div>
						<div className="ItemContent">
							<ProductCodeGen
								key={index}
								ModifyMode={this.state.ModifyMode}
								InitialValue={values[item.id]}
								name={item.id}
								onChange={handleChange}
							/>
						</div>
					</div>
				);
			else if (item.format === 'Text')
				ItemsTable.push(
					<div className="ItemView" key={index}>
						<div className="ItemTitle">{item.name}</div>
						<div className="ItemContent">
							<Form.Control
								className="TextInput"
								required
								type="text"
								name={item.id}
								onChange={handleChange}
							/>
						</div>
					</div>
				);
			else if (item.format === 'Textline')
				ItemsTable.push(
					<div className="ItemView" key={index}>
						<div className="ItemTitle">{item.name}</div>
						<div className="ItemContent">
							<Form.Control
								className="TextInput"
								required
								type="text"
								name={item.id}
								onChange={handleChange}
							/>
						</div>
					</div>
				);
			else if (item.format === 'Price')
				ItemsTable.push(
					<div className="ItemView" key={index}>
						<div className="ItemTitle">{item.name}</div>
						<div className="ItemContent">
							<Form.Control
								className="TextInput"
								required
								type="number"
								name={item.id}
								onChange={handleChange}
							/>
						</div>
					</div>
				);
			else if (item.format === 'Select')
				ItemsTable.push(
					<div className="ItemView" key={index}>
						<div className="ItemTitle">{item.name}</div>
						<div className="ItemContent">
							<Form.Control
								className="TextSelect"
								required
								custom
								as="select"
								name={item.id}
								onChange={handleChange}
							>
								{this.GetOption(item.SelectText)}
							</Form.Control>
						</div>
					</div>
				);
			else if (item.format === 'Hierarchy') {
				//console.log(item.HierarchyData.name);
				ItemsTable.push(
					<div className="ItemView" key={index}>
						<div className="ItemTitle">{item.name}</div>
						<div className="ItemContent">
							<CatSelected
								name={item.id}
								title={item.name}
								HierarchyNames={item.HierarchyData.name}
								viewField={item.HierarchyData.viewField}
								hierarchyData={this.props.hierarchyData[item.id]}
								selected={values[item.id]}
								onChange={handleChange}
							/>
						</div>
					</div>
				);
			} else if (item.format === 'UploadImage') {
				ItemsTable.push(
					<div className="ItemViewRow" key={index}>
						<div className="ItemHeader">
							<div className="ItemTitle">{item.name}</div>
							<div className="ItemContent">
								<Form.File
									label={`${values[item.id].UploadInfo.length}개`}
									data-browse="+"
									onChange={(e) => {
										this.ImageFileChange(e, item, values);
									}}
									multiple
									custom
								/>
							</div>
						</div>
						<div className="ItemBody">
							<div className="ImageformBox">{this.GetImage(values, item)}</div>
						</div>
					</div>
				);
			} else if (item.format === 'UploadHtml')
				ItemsTable.push(
					<div className="ItemViewRow" key={index}>
						<div className="ItemHeader">
							<div className="ItemTitle">{item.name}</div>
							<div className="ItemContent">
								<Form.File
									label={`${values[item.id].UploadInfo.length}개`}
									data-browse="+"
									onChange={(e) => {
										this.ImageFileChange(e, item, values);
									}}
									multiple
									custom
								/>
							</div>
						</div>
						<div className="ItemBody">
							<div className="ImageformBox">{this.GetImage(values, item)}</div>
						</div>
					</div>
				);
			else if (item.format === 'Tab') {
				var FormViewTable = this.ItemsView(item.Items, values, handleChange);

				let TabTable = [];
				FormViewTable.forEach((TabItem, Tabindex) => {
					TabTable.push(
						<Tab
							key={Tabindex}
							className="ImageformBox"
							eventKey={item.Items[TabItem.key].id}
							title={item.Items[TabItem.key].name}
						>
							{TabItem}
						</Tab>
					);
				});

				ItemsTable.push(
					<div className="ItemViewRow" key={index}>
						<div className="ItemHeader">
							<div className="ItemTitle">{item.name}</div>
							<div className="ItemContent" />
						</div>
						<div className="ItemBody">
							<Tabs defaultActiveKey={item.Items[0].id} id="noanim-tab-example">
								{TabTable}
							</Tabs>
						</div>
					</div>
				);
			}
		});

		return ItemsTable;
	};

	// 타입별 폼 생성
	FormView = (Struct, values, handleChange) => {
		//console.log('Struct', Struct);

		let FormTable = [];
		Struct.forEach((item, index) => {
			if (item.format === 'Titletext')
				FormTable.push(
					<div className="FormView" key={index}>
						<div className="FormViewTitle">{item.name}</div>
						<div className="FormViewPage">{this.ItemsView(item.Items, values, handleChange)}</div>
					</div>
				);
		});

		return FormTable;
	};

	// 업로드 이미지폼
	GetImage = (values, item) => {
		let images = [];
		values[item.id].UploadInfo.forEach((value, index) => {
			images.push(
				<div className="Imageform" key={index}>
					<Image className="ImageformImage" variant="top" src={value.url} />
					<div className="ImageformTitle">{value.name}</div>
					<Button
						className="ImageformXBTN"
						onClick={() => {
							this.remove(value, index);
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
	ImageFileChange = (e, item, value) => {
		if (e.target.files) {
			[].forEach.call(e.target.files, (file) => {
				let reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onloadend = (e) => {
					this.setState({
						InitData: update(this.state.InitData, {
							[item.id]: {
								UploadInfo: { $push: [ { name: file.name, url: e.target.result } ] },
								FileList: { $push: [ file ] }
							}
						})
					});
				};
			});
		}
	};

	// 옵션폼
	GetOption = (SelectText) => {
		let opt = [];
		SelectText.forEach((SelectText, index) => {
			opt.push(<option key={index}>{SelectText}</option>);
		});
		return opt;
	};

	onSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();

		this.props.onSubmit(this.state.InitData);
	};

	handleChange = (item) => {
		this.setState({
			InitData: update(this.state.InitData, {
				[item.target.name]: { $set: item.target.value }
			})
		});
	};
	render() {
		var bt_style = {};
		if (this.props.CustomSubmit === true) {
			bt_style = {
				display: 'none'
			};
		} else {
			bt_style = {
				display: 'flex'
			};
		}

		return (
			<div className="ProductCreatePage">
				<Form onSubmit={this.onSubmit}>
					<div className="ProductCreateView">
						{this.FormView(this.props.DataStruct.Struct, this.state.InitData, this.handleChange)}
					</div>

					<div className="ProductCreateFooter" style={bt_style}>
						<Button ref={this.Submitbtn} type="submit" variant="Submit" size="sm">
							{this.state.ModifyMode ? '수정' : '등록'}
						</Button>
					</div>
				</Form>
			</div>
		);
	}
}

export default CreatePage;
