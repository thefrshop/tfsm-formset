import React from 'react';
import update from 'react-addons-update';
import DatePicker from 'react-datepicker';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import ProductCodeGen from './ProductCodeGen';
import './CreatePage.css';
import 'react-datepicker/dist/react-datepicker.css';

import CatSelect from './CatSelect';
import ListSelect from './ListSelect';
import ViewList from './ViewList';

import { Button, Form, Image, Tab, Tabs } from 'react-bootstrap';

import * as UploadImage from './module/UploadImage';

import { InitItemsSet } from './asset/InitItemsSet';

class CreatePage extends React.Component {
	constructor(props) {
		super(props);

		this.Submitbtn = React.createRef();

		if (this.props.Submit !== undefined) this.props.Submit(() => this.Submit());
		if (this.props.UpdateData !== undefined) this.props.UpdateData((Data) => this.UpdateData(Data));

		var ModifyMode = this.props.ModifyMode;
		if (ModifyMode === undefined) ModifyMode = false;

		this.state = {
			ModifyMode: ModifyMode,
			isloading: false,
			create_state: 0,
			InitData: this.InitDataSet(ModifyMode, this.props.DataStruct.Struct, this.props.InitData),
			imagefile: [],
			htmlfile: null,
			deleteimage: []
		};
	}
	Submit = () => {
		this.Submitbtn.current.click();
	};

	UpdateData = (Data) => {
		//console.log('Data', Data);

		var InitData = this.InitDataSet(this.state.ModifyMode, this.props.DataStruct.Struct, Data);
		//console.log('UpdateData', InitData);

		this.setState({
			InitData: InitData
		});
	};

	// 타입별 데이터 초기화
	InitDataSet = (ModifyMode, Struct, Data) => {
		var InitData = {};
		if (ModifyMode) {
			Struct.forEach((StructItems) => {
				InitData = Object.assign(InitData, InitItemsSet(StructItems.Items));
			});
			InitData = Object.assign(InitData, Data);

			//console.log(InitData);
		} else {
			Struct.forEach((StructItems) => {
				InitData = Object.assign(InitData, InitItemsSet(StructItems.Items));
			});
		}

		return InitData;
	};

	// 타입별 팝업 초기화
	InitPopupSet = (Struct) => {
		let InitPopup = {};
		Struct.forEach((StructItems) => {
			StructItems.Items.forEach((item, index) => {
				if (item.format === 'Hierarchy') {
					InitPopup[item.id] = false;
				} else if (item.format === 'ListSelect') {
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
								prefix={item.prefix}
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
								value={values[item.id]}
								className="TextInput"
								required
								type="text"
								name={item.id}
								onChange={handleChange}
							/>
						</div>
					</div>
				);
			else if (item.format === 'Date')
				ItemsTable.push(
					<div className="ItemView" key={index}>
						<div className="ItemTitle">{item.name}</div>
						<div className="ItemContent">
							<Form.Control
								value={values[item.id] || ''}
								className="TextInput"
								required
								type="date"
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
								value={values[item.id]}
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
								value={values[item.id]}
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
								value={values[item.id]}
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
				if (item.Select === undefined) {
					ItemsTable.push(
						<div className="ItemView" key={index}>
							<div className="ItemTitle">{item.name}</div>
							<div className="ItemContent">
								<CatSelect
									InitialValue={values[item.id]}
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
				} else if (item.Select === 'Multi') {
					ItemsTable.push(
						<div className="ItemViewRow" key={index}>
							<div className="ItemHeader">
								<div className="ItemTitle">{item.name}</div>
								<div className="ItemContent">
									<CatSelect
										name={item.id}
										title={item.name}
										HierarchyNames={item.HierarchyData.name}
										viewField={item.HierarchyData.viewField}
										hierarchyData={this.props.hierarchyData[item.Selectid]}
										selected={values[item.id]}
										onChange={(e) => {
											let dat = [];

											if (this.state.InitData[item.Selectid] !== undefined) {
												var bool = true;
												dat = this.state.InitData[item.Selectid];
												dat.forEach((val, ind) => {
													if (val[3].Code === e.target.value[3].Code) bool = false;
												});
												if (bool) dat.push(e.target.value);
											} else {
												dat.push(e.target.value);
											}

											this.setState({
												InitData: update(this.state.InitData, {
													[item.Selectid]: { $set: dat }
												})
											});
										}}
									/>
								</div>
							</div>
							<div className="ItemBody">
								<div className="ViewListformBox">{this.GetHierarchy(values, item)}</div>
							</div>
						</div>
					);
				} else {
					ItemsTable.push(
						<div className="ItemView" key={index}>
							<div className="ItemTitle">{item.name}</div>
							<div className="ItemContent">
								<CatSelect
									InitialValue={values[item.id]}
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
				}
			} else if (item.format === 'ListSelect') {
				ItemsTable.push(
					<div className="ItemViewRow" key={index}>
						<div className="ItemHeader">
							<div className="ItemTitle">{item.name}</div>
							<div className="ItemContent">
								<ListSelect
									{...this.props}
									InitialValue={values[item.id]}
									name={item.id}
									title={item.name}
									selected={values[item.id]}
									onChange={handleChange}
									columns={item.columns}
									dataprops={item.dataprops}
									keyField={item.keyField}
									orderField={item.orderField}
									viewField={item.viewField}
								/>
							</div>
						</div>
						{item.Viewhidden === undefined ? null : (
							<div className="ItemBody">
								<div className="ViewListformBox">
									<ViewList
										{...this.props}
										InitialValue={values[item.id]}
										name={item.id}
										title={item.name}
										selected={values[item.id]}
										columns={item.columns}
										keyField={item.keyField}
										orderField={item.orderField}
										viewField={item.viewField}
									/>
								</div>
							</div>
						)}
					</div>
				);
			} else if (item.format === 'ImageSelect') {
				ItemsTable.push(
					<div className="ItemViewRow" key={index}>
						<div className="ItemHeader">
							<div className="ItemTitle">{item.name}</div>
							<div className="ItemContent" />
						</div>
						<div className="ItemBody">
							<div className="ImageformBox">{this.ImageSelectList(values, item)}</div>
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
										this.ImageFileChange(e, item.id);
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
			} else if (item.format === 'Imageset') {
				ItemsTable.push(
					<div className="ItemViewRow" key={index}>
						<div className="ItemHeader">
							<div className="ItemTitle">{item.name}</div>
						</div>
						<div className="ItemBody">
							<div className="ImageformBox">{this.ListImage(values, item)}</div>
						</div>
					</div>
				);
			} else if (item.format === 'UploadHtml') {
				ItemsTable.push(
					<div className="ItemViewRow" key={index}>
						<div className="ItemHeader">
							<div className="ItemTitle">{item.name}</div>
							<div className="ItemContent">
								<Form.File
									label={`${values[item.id].UploadInfo.length}개`}
									data-browse="+"
									onChange={(e) => {
										this.ImageFileChange(e, item.id);
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
			} else if (item.format === 'Tab') {
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
			} else if (item.format === 'Child') {
				this.props.children.forEach((element) => {
					//console.log(element.key);

					if (element.key === item.key) {
						ItemsTable.push(
							<div className="ItemViewRow" key={index}>
								<div className="ItemBody">
									<div className="ViewListformBox">{element}</div>
								</div>
							</div>
						);
					}
				});
			} else if (item.format === 'TimerSet') {
				ItemsTable.push(
					<div className="ItemViewRow" key={index} style={{ marginBottom: 20 }}>
						<div className="ItemHeader">
							<div className="ItemTitle">{item.name}</div>
							<div className="ItemContent">
								<DatePicker
									name={item.id}
									selected={values[item.id]}
									dateFormat="yyyy-MM-dd HH:mm:ss"
									onChange={(date) =>
										this.setState({
											InitData: update(this.state.InitData, {
												[item.id]: { $set: date }
											})
										})}
									showTimeSelect
								/>
							</div>
						</div>
					</div>
				);
			} else if (item.format === 'Switch') {
				ItemsTable.push(
					<div className="ItemViewRow" key={index} style={{ marginBottom: 20 }}>
						<div className="ItemHeader">
							<div className="ItemTitle">{item.name}</div>
							<div className="ItemContent">
								<BootstrapSwitchButton
									checked={values[item.id]}
									onChange={(value) =>
										this.setState({
											InitData: update(this.state.InitData, {
												[item.id]: { $set: value }
											})
										})}
								/>
							</div>
						</div>
					</div>
				);
			} else if (item.format === 'Option') {
				ItemsTable.push(
					<div className="ItemViewRow" key={index}>
						<div className="ItemHeader">
							<div className="ItemTitle">{item.name}</div>
							<div className="ItemContent">
								<Form.Control
									type={'text'}
									value={values[item.id]}
									className="TextInput"
									name={item.id}
									placeholder="쉼표(,)로 구분"
									onChange={handleChange}
								/>
								<Button
									style={{
										top: 0,
										right: 0,
										margin: 0,
										padding: 0,
										width: 34,
										height: 34,
										fontSize: 10,
										backgroundColor: '#555555'
									}}
									onClick={() => {
										let dat = [];
										var strArray = this.state.InitData[item.id].split(',');
										strArray.forEach((value) => {
											if (value.trim() !== '') dat.push({ name: value.trim(), price: 0 });
										});
										this.setState({
											InitData: update(this.state.InitData, {
												[item.Selectid]: { $set: dat }
											})
										});
									}}
								>
									추가
								</Button>
							</div>
						</div>
						<div className="ItemBody">
							<div className="ViewListformBox">{this.GetSetOption(values, item)}</div>
						</div>
					</div>
				);
			}
		});

		return ItemsTable;
	};

	GetHierarchy = (values, item) => {
		let viewlist = [];

		const onRemove = (Selvalue) => {
			const RemoveData = values[item.Selectid].filter((arr) => arr[3].Code !== Selvalue[3].Code);
			console.log(RemoveData);
			this.setState({
				InitData: update(this.state.InitData, {
					[item.Selectid]: { $set: RemoveData }
				})
			});
		};

		function DataView(Selvalue) {
			let table = '';
			Selvalue.forEach((catitem, catindex) => {
				if (catitem !== null) {
					table += catitem[item.HierarchyData.viewField] + ' ';
				}
			});
			return table;
		}

		if (values[item.Selectid] !== undefined) {
			values[item.Selectid].forEach((Selvalue, Selindex) => {
				console.log(Selvalue);
				viewlist.push(
					<div className="ViewList" key={Selindex}>
						<div className="Viewitle">{Selindex + 1}</div>
						<div className="ViewContent">{DataView(Selvalue)}</div>
						<Button
							style={{
								top: 0,
								right: 0,
								margin: 0,
								padding: 0,
								width: 34,
								height: 34,
								fontSize: 10,
								backgroundColor: '#555555'
							}}
							onClick={() => onRemove(Selvalue)}
						>
							삭제
						</Button>
					</div>
				);
			});
		}

		return viewlist;
	};

	GetSetOption = (values, item) => {
		let viewlist = [];
		if (values[item.Selectid] !== undefined) {
			values[item.Selectid].forEach((Selvalue, Selindex) => {
				viewlist.push(
					<div className="ViewList" key={Selindex}>
						<div className="ItemTitle">{Selvalue.name}</div>
						<input
							type={'number'}
							className="TextInput"
							required
							value={Selvalue.price}
							name={Selvalue.price}
							onChange={(e) => {
								this.setState({
									InitData: update(this.state.InitData, {
										[item.Selectid]: { [ind]: { price: { $set: e.target.value } } }
									})
								});
							}}
						/>
					</div>
				);
			});
		}
		return viewlist;
	};

	ImageSelectList = (values, item) => {
		let images = [];
		if (item.Select === 'Multi') {
			values[item.id].forEach((value, index) => {
				const apple = this.state.InitData.image.find((element) => {
					if (element === value) {
						return true;
					}
				});
				images.push(
					<div
						style={{ borderWidth: apple !== undefined ? 2 : 0, borderColor: '#1f8b3b' }}
						onClick={() => {
							if (apple !== undefined) {
								var array = [ ...this.state.InitData[item.Selectid] ]; // make a separate copy of the array
								var ind = array.indexOf(value);
								if (ind !== -1) {
									array.splice(ind, 1);
									this.setState({
										InitData: update(this.state.InitData, {
											[item.Selectid]: { $set: array }
										})
									});
								}
							} else {
								this.setState({
									InitData: update(this.state.InitData, {
										[item.Selectid]: { $push: [ value ] }
									})
								});
							}
						}}
						className="Imageform"
						key={index}
					>
						<Image className="ImageformImage" variant="top" src={value} />
					</div>
				);
			});
		} else {
			values[item.id].forEach((value, index) => {
				images.push(
					<div
						style={{ borderWidth: this.state.InitData.image[0] === value ? 2 : 0, borderColor: '#1f8b3b' }}
						onClick={() => {
							this.setState({
								InitData: update(this.state.InitData, {
									[item.Selectid]: { 0: { $set: value } }
								})
							});
						}}
						className="Imageform"
						key={index}
					>
						<Image className="ImageformImage" variant="top" src={value} />
					</div>
				);
			});
		}

		return images;
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
		var UploadInfo = values[item.id].UploadInfo;

		UploadInfo.forEach((value, index) => {
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

	ListImageRemove = (id, index) => {
		this.setState({
			InitData: update(this.state.InitData, {
				[id]: { $splice: [ [ index, 1 ] ] }
			})
		});
	};
	// 이미지 리스트폼
	ListImage = (values, item) => {
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
							this.ListImageRemove(item.id, index);
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
	ImageFileChange = (e, id) => {
		if (e.target.files) {
			[].forEach.call(e.target.files, (file) => {
				let reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onloadend = (e) => {
					this.setState({
						InitData: update(this.state.InitData, {
							[id]: {
								UploadInfo: {
									$push: [ { name: file.name, url: e.target.result, value: e.target.files } ]
								},
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
