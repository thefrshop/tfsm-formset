import React from 'react';
import TableButton from './asset/TableButton';
import { InitColumns } from './asset/InitColumns';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import ToolkitProvider, { ColumnToggle } from 'react-bootstrap-table2-toolkit';
import './CreateTable.css';

import { Button, InputGroup, FormControl, Accordion } from 'react-bootstrap';
import 'moment/locale/ko';

import { BsLayoutThreeColumns } from 'react-icons/bs';

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

	onUnload = () => {
		this.setState((state) => ({
			...state,
			showModal: false,
			showImgPreview: false,
			showDataPreview: false
		}));
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

		var selectRow = this.props.selectRow;
		if (selectRow !== undefined) {
			if (selectRow.bgColor === undefined) selectRow.bgColor = '#ffffe0';
		}

		return (
			<div>
				{this.state.showImageHover ? <img className="imageHoverView" alt="" src={this.state.hoversrc} /> : null}

				<ToolkitProvider
					keyField={this.props.keyField}
					data={this.props.data}
					columns={InitColumns(this.props.columns, this.props.onChange)}
					onTableChange={this.onTableChange}
					search
					columnToggle
				>
					{(props) => (
						<div className="Table_main">
							<Accordion style={{ marginBottom: '15px' }}>
								<div className="THeader">
									<div style={{ display: 'flex' }}>
										{this.props.toggleList ? (
											<Accordion.Toggle
												as={Button}
												variant="secondary"
												className="TButton"
												eventKey="0"
												style={{ marginRight: '20px', minWidth: '20px' }}
											>
												<BsLayoutThreeColumns />
											</Accordion.Toggle>
										) : null}
										<TableButton
											UpDownBT={this.props.UpDownBT}
											setBT={this.props.setBT}
											Add={this.props.Add}
											Remove={this.props.Remove}
											Modify={this.props.Modify}
										/>
									</div>

									{this.props.searchBar ? (
										<SearchForm
											{...props.searchProps}
											ref={this.SearchBar}
											SendSearch={this.props.SendSearch}
										/>
									) : null}
								</div>
								{this.props.toggleList ? (
									<Accordion.Collapse eventKey="0">
										<ToggleList
											contextual="secondary"
											className="ToggleList"
											btnClassName="ToggleListBtn"
											{...props.columnToggleProps}
										/>
									</Accordion.Collapse>
								) : null}
							</Accordion>

							<BootstrapTable
								id={this.props.id}
								{...props.baseProps}
								selectRow={selectRow}
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
						<Button variant="secondary" className="ClearBT" onClick={this.ClearClick}>
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
						<Button variant="secondary" className="SearchBT" onClick={this.SearchClick}>
							검색
						</Button>
					</InputGroup.Append>
				</InputGroup>
			</div>
		);
	}
}
