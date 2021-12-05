import React from 'react';
import update from 'react-addons-update';
import './CreatePage.css';
import './react-datepicker.css';

import { Button, Form, Image, Tab, Tabs } from 'react-bootstrap';

import { InitItemsSet } from './asset/InitItemsSet';
import * as FormFormat from './asset/FormFormat';

class CreatePage extends React.Component {
	constructor(props) {
		super(props);

		this.Submitbtn = React.createRef();

		if (this.props.Submit !== undefined) this.props.Submit(() => this.Submit());

		this.state = {
			isloading: false,
			create_state: 0,
			InitData: null,
			imagefile: [],
			htmlfile: null,
			deleteimage: []
		};
	}
	componentDidMount() {
		var ModifyMode = this.props.ModifyMode;
		if (ModifyMode === undefined) ModifyMode = false;
		var values = this.InitDataSet(ModifyMode, this.props.DataStruct.Struct, this.props.InitData);
		this.setState({ InitData: values });
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.DataStruct.Struct != this.props.DataStruct.Struct || prevProps.InitData != this.props.InitData) {
			var values = this.InitDataSet(this.props.ModifyMode, this.props.DataStruct.Struct, this.props.InitData);
			this.setState({ InitData: values });
		}
	}

	Submit = () => {
		this.Submitbtn.current.click();
	};

	// 타입별 폼 생성
	FormView = (Struct, InitData, handleChange) => {
		var ModifyMode = this.props.ModifyMode;
		if (ModifyMode === undefined) ModifyMode = false;

		let FormTable = [];
		Struct.forEach((item, index) => {
			if (item.format === 'Titletext')
				FormTable.push(
					<div className="FormView" key={index}>
						<div className="FormViewTitle">{item.name}</div>
						<div className="FormViewPage">
							{this.ItemsView(item.Items, this.state.InitData, handleChange, ModifyMode)}
						</div>
					</div>
				);
		});

		return FormTable;
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

		//console.log(InitData);

		return InitData;
	};

	// 타입별 팝업 초기화
	InitPopupSet = (StructItems) => {
		var InitPopup = {};
		StructItems.Items.forEach((item) => {
			InitPopup[item.id] = false;
		});
		return InitPopup;
	};

	ItemsView = (Struct, values, handleChange, ModifyMode) => {
		//console.log(this.props);
		if (values === null) return null;

		let ItemsTable = [];
		Struct.forEach((item, index) => {
			if (item.format === 'Child') {
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
			} else {
				ItemsTable.push(
					FormFormat.ItemsView(this, index, item, values, handleChange, ModifyMode, this.UpdateInitData)
				);
			}
		});
		return ItemsTable;
	};

	UpdateInitData = (id, data) => {
		this.setState({
			InitData: update(this.state.InitData, {
				[id]: { $set: data }
			})
		});
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

	onSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();

		this.props.onSubmit(this.state.InitData);
	};

	handleChange = (item) => {
		if (this.props.onChangeItem !== undefined) this.props.onChangeItem(item);

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
						{this.FormView(this.props.DataStruct.Struct, this.props.InitData, this.handleChange)}
					</div>

					<div className="ProductCreateFooter" style={bt_style}>
						<Button ref={this.Submitbtn} type="submit" variant="Submit" size="sm">
							{this.props.ModifyMode ? '수정' : '등록'}
						</Button>
					</div>
				</Form>
			</div>
		);
	}
}

export default CreatePage;
