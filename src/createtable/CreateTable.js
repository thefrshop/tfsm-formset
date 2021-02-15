import React from 'react';
import TableButton from './asset/TableButton';
import update from 'react-addons-update';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import moment from 'moment-timezone';

import ToolkitProvider, { ColumnToggle } from 'react-bootstrap-table2-toolkit';
import './CreateTable.css';

import BootstrapSwitchButton from 'bootstrap-switch-button-react';

import { Button, InputGroup, FormControl, Image } from 'react-bootstrap';
import 'moment/locale/ko';
import NumberFormat from 'react-number-format';

//import { Link } from 'react-router-dom';

export default class CreateTable extends React.Component {
	constructor(props) {
		super(props);

		this.Table = React.createRef();
		this.SearchBar = React.createRef();

		this.state = {
			Tabledata: this.props.data
		};
	}

	dataChange = (data) => {
		this.setState({ Tabledata: data });
	};

	GetRow = () => {
		return this.Table.current.selectionContext.selected;
	};

	GetRowSelectedData = () => {
		var rowKeys = this.Table.current.selectionContext.selected;
		var rowData = [];
		rowKeys.forEach((num) => {
			rowData.push(this.props.data.find((item) => item[this.props.keyField] === num));
		});
		return rowData;
	};

	InitColumns = (propscolumns) => {
		var columns = [];
		propscolumns.forEach((item) => {
			var c_item = item;
			if (c_item['format'] === 'Link') {
				c_item = update(c_item, { formatter: { $set: this.linkFormatter } });
				c_item = update(c_item, { formatExtraData: { $set: item['dataField'] } });
			} else if (c_item['format'] === 'switch') {
				c_item = update(c_item, { formatter: { $set: this.switchFormatter } });
				c_item = update(c_item, { formatExtraData: { $set: item['dataField'] } });
			} else if (c_item['format'] === 'Time') {
				c_item = update(c_item, { formatter: { $set: this.Time_Formatter } });
				c_item = update(c_item, { formatExtraData: { $set: c_item['viewField'] } });
			} else if (c_item['format'] === 'Number') {
				c_item = update(c_item, { formatter: { $set: this.Num_Formatter } });
				c_item = update(c_item, { formatExtraData: { $set: c_item['viewField'] } });
			} else if (c_item['format'] === 'toString') {
				c_item = update(c_item, { formatter: { $set: this.toString_Formatter } });
				c_item = update(c_item, { formatExtraData: { $set: c_item['viewField'] } });
			} else if (c_item['format'] === 'image') {
				c_item = update(c_item, { formatter: { $set: this.Img_Formatter } });
				c_item = update(c_item, { formatExtraData: { $set: item['dataField'] } });
			} else if (c_item['format'] === 'images') {
				c_item = update(c_item, { formatter: { $set: this.Imgs_Formatter } });
				c_item = update(c_item, { formatExtraData: { $set: item['dataField'] } });
			} else if (c_item['format'] === 'button') {
				c_item = update(c_item, { formatter: { $set: this.Button_Formatter } });
				c_item = update(c_item, {
					formatExtraData: { $set: { dataField: item['dataField'], setView: item['setView'] } }
				});
			} else if (c_item['format'] === 'htmlfile') {
				c_item = update(c_item, { formatter: { $set: this.Htmlfile_Formatter } });
				c_item = update(c_item, { formatExtraData: { $set: item['dataField'] } });
			} else if (c_item['format'] === 'color') {
				c_item = update(c_item, { formatter: { $set: this.Color_Formatter } });
				c_item = update(c_item, { formatExtraData: { $set: item['dataField'] } });
			}

			columns.push(c_item);
		});

		//console.log(columns);
		return columns;
	};

	onUnload = () => {
		this.setState((state) => ({
			...state,
			showModal: false,
			showImgPreview: false,
			showDataPreview: false
		}));
	};

	toString_Formatter = (cell, row, rowIndex, formatExtraData) => {
		return JSON.stringify(cell);
	};

	Htmlfile_Formatter = (cell, row, rowIndex, formatExtraData) => {
		return (
			<div target="_blank" href={cell}>
				{cell}
			</div>
		);
		//return <div dangerouslySetInnerHTML={{__html:require(cell)}}/>
	};

	Color_Formatter = (cell, row, rowIndex, formatExtraData) => {
		const ColorFormat = {
			color: cell
		};
		return <div style={ColorFormat}>{cell}</div>;
	};

	Button_Formatter = (cell, row, rowIndex, formatExtraData) => {
		return <div />;
	};

	Imgs_Formatter = (cell, row, rowIndex, formatExtraData) => {
		var celldata = [];
		try {
			celldata = JSON.parse(cell);
		} catch (exception) {
			celldata = [];
		}

		return (
			<div>
				{celldata.map((value, index) => {
					return <Image key={index} style={{ margin: 5 }} src={value} width={50} height={50} />;
				})}
			</div>
		);
		//console.log(cell, row)
	};

	Img_Formatter = (cell, row, rowIndex, formatExtraData) => {
		return <Image src={cell} width={50} height={50} />;
	};

	Num_Formatter = (cell, row, rowIndex, formatExtraData) => {
		return (
			<NumberFormat
				value={cell}
				displayType={'text'}
				thousandSeparator={true}
				suffix={'원'}
				renderText={(value) => <div>{value}</div>}
			/>
		);
	};

	switchFormatter = (cell, row, rowIndex, formatExtraData) => {
		return (
			<BootstrapSwitchButton
				size="xs"
				checked={Boolean(cell)}
				onChange={(checked) => this.props.switchChange(checked, row)}
			/>
		);
	};

	linkFormatter = (cell, row, rowIndex, formatExtraData) => {
		return (
			<Button className="TableLinkButton" variant="outline-dark" onClick={() => this.props.GoLink(cell, row)}>
				{cell}
			</Button>
		);
	};

	Time_Formatter = (cell, row, rowIndex, formatExtraData) => {
		var OutDate = moment(cell).tz('Asia/Seoul').locale('ko');
		return <div>{OutDate.format('YY-MM-D a h:mm:ss')}</div>;
	};

	render() {
		const { ToggleList } = ColumnToggle;

		const customTotal = (from, to, size) => (
			<span className="react-bootstrap-table-pagination-total">
				전체 ({size}개) : {from} 부터 {to} 까지
			</span>
		);
		const options = {
			paginationSize: 10,
			pageStartIndex: 1,
			alwaysShowAllBtns: true, // Always show next and previous button
			withFirstAndLast: true, // Hide the going to First and Last page button
			// hideSizePerPage: true, // Hide the sizePerPage dropdown always
			// hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
			firstPageText: '<<',
			prePageText: '<',
			nextPageText: '>',
			lastPageText: '>>',
			nextPageTitle: '처음 페이지',
			prePageTitle: '이전 페이지',
			firstPageTitle: '다음 페이지',
			lastPageTitle: '마지막 페이지',
			showTotal: true,
			paginationTotalRenderer: customTotal,
			sizePerPageList: [
				{
					text: '20개',
					value: 20
				},
				{
					text: '50개',
					value: 50
				},
				{
					text: '100개',
					value: 100
				},
				{
					text: '200개',
					value: 200
				},
				{
					text: '500개',
					value: 500
				},
				{
					text: '전체',
					value: this.props.data.length
				}
			]
		};
		this.props.selectRow.bgColor = '#ffffe0';

		return (
			<div>
				{this.state.showImageHover ? <img className="imageHoverView" alt="" src={this.state.hoversrc} /> : null}

				<ToolkitProvider
					keyField={this.props.keyField}
					data={this.props.data}
					columns={this.InitColumns(this.props.columns)}
					onTableChange={this.onTableChange}
					search
					columnToggle
				>
					{(props) => (
						<div className="Table_main">
							{this.props.toggleList ? (
								<ToggleList
									contextual="success"
									className="ToggleList"
									btnClassName="ToggleListBtn"
									{...props.columnToggleProps}
								/>
							) : null}

							<div className="THeader">
								<TableButton
									UpDownBT={this.props.UpDownBT}
									setBT={this.props.setBT}
									setMoveBT={this.props.setMoveBT}
									setTelecom={this.props.setTelecom}
									Code="Top"
									Add={this.props.Add}
									Remove={this.props.Remove}
									Modify={this.props.Modify}
									Process={this.props.Process}
									MoveDB={this.props.MoveDB}
									CollectDB={this.props.CollectDB}
									TelecomChange={this.props.TelecomChange}
									disableAll={this.props.disableAll}
								/>

								{this.props.searchBar ? (
									<SearchForm
										{...props.searchProps}
										ref={this.SearchBar}
										SendSearch={this.props.SendSearch}
									/>
								) : null}
							</div>

							<BootstrapTable
								{...props.baseProps}
								selectRow={this.props.selectRow}
								ref={this.Table}
								rowEvents={this.props.rowEvents}
								pagination={!this.props.pagination ? null : paginationFactory(options)}
							/>
						</div>
					)}
				</ToolkitProvider>
			</div>
		);
	}
}

class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		};
	}

	SendSearch = (input) => {
		//console.log(input);
		this.props.onSearch(input);
	};

	SearchClick = () => {
		this.props.onSearch(this.state.input);
	};

	ClearClick = () => {
		this.setState(() => ({
			input: ''
		}));
		this.props.onSearch('');
	};

	SearchTable = (item) => {
		this.setState(() => ({
			input: item
		}));
		this.props.onSearch(item);
	};

	FormChange = (e) => {
		var in_text = e.target.value;
		this.setState(() => ({
			input: in_text
		}));
	};

	appKeyPress = (e) => {
		if (e.key === 'Enter') {
			this.SearchClick();
		}
	};

	render() {
		return (
			<div className="TopSearchBar">
				<InputGroup>
					<InputGroup.Prepend>
						<Button className="ClearBT" onClick={this.ClearClick}>
							Clear
						</Button>
					</InputGroup.Prepend>
					<FormControl
						className="SearchForm"
						onChange={(e) => this.FormChange(e)}
						value={this.state.input}
						onKeyPress={(e) => this.appKeyPress(e)}
					/>
					<InputGroup.Append>
						<Button className="SearchBT" onClick={this.SearchClick}>
							검색
						</Button>
					</InputGroup.Append>
				</InputGroup>
			</div>
		);
	}
}
