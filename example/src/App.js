import React from 'react';

import { CreatePage, CreateTable } from 'tfsm-formset/dist';
import 'tfsm-formset/dist/index.css';
import './App.css';
import { Button, Tab, Tabs } from 'react-bootstrap';
import * as exL from './exampleList';
import * as exT from './exampleTable';
import ReactJson from 'react-json-view';

import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
SyntaxHighlighter.registerLanguage('jsx', jsx);

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultdata: {},
			modifidata: {}
		};
	}

	onSubmitDefault = (data) => {
		this.setState({ defaultdata: data });
		console.log(data);
	};
	onSubmitModifi = (data) => {
		this.setState({ modifidata: data });
		console.log(data);
	};

	Test = (name, struct, InitData, child, HierarchySample, ListData) => {
		return (
			<Tab eventKey={name} title={name}>
				<h5>Struct</h5>
				<div className="consoleView">
					<ReactJson src={struct.Struct} theme="twilight" name={'Struct'} iconStyle="circle" />
				</div>
				<br />
				<h5>기본</h5>
				<CreatePage
					ModifyMode={false}
					DataStruct={struct}
					onSubmit={this.onSubmitDefault}
					hierarchyData={HierarchySample}
					ListData={ListData}
				>
					{child}
				</CreatePage>
				<br />
				<div className="consoleView">
					<ReactJson src={this.state.defaultdata} theme="twilight" name={'Output'} iconStyle="circle" />
					<div className="consoleBtSection">
						<Button
							style={{ padding: '2px 5px' }}
							variant="light"
							onClick={() => {
								console.log(this.state.defaultdata);
							}}
						>
							> Console
						</Button>
					</div>
				</div>
				{!InitData ? null : (
					<div>
						<br />
						<h5>수정</h5>
						<CreatePage
							InitData={InitData}
							ModifyMode={true}
							DataStruct={struct}
							onSubmit={this.onSubmitModifi}
							hierarchyData={HierarchySample}
							ListData={ListData}
						>
							{child}
						</CreatePage>
						<br />
						<div className="consoleView">
							<ReactJson src={InitData} theme="twilight" name={'Input'} iconStyle="circle" />
							<div className="consoleBtSection">
								<Button
									style={{ padding: '2px 5px' }}
									variant="light"
									onClick={() => {
										console.log(InitData);
									}}
								>
									> Console
								</Button>
							</div>

							<ReactJson
								src={this.state.modifidata}
								theme="twilight"
								name={'Output'}
								iconStyle="circle"
							/>
							<div className="consoleBtSection">
								<Button
									style={{ padding: '2px 5px' }}
									variant="light"
									onClick={() => {
										console.log(this.state.modifidata);
									}}
								>
									> Console
								</Button>
							</div>
						</div>
						<br />
					</div>
				)}
			</Tab>
		);
	};

	TestTableItem = (columns, InitData, keyField) => {
		if (keyField === undefined) keyField = columns[0].dataField;
		return (
			<div>
				<h5>Columns</h5>
				<div className="consoleView">
					<ReactJson src={columns} theme="twilight" name={'Columns'} iconStyle="circle" />
					<div className="consoleBtSection">
						<Button
							style={{ padding: '2px 5px' }}
							variant="light"
							onClick={() => {
								console.log(columns);
							}}
						>
							> Console
						</Button>
					</div>
				</div>
				<h5>Data</h5>
				<div className="consoleView">
					<ReactJson src={InitData} theme="twilight" name={'Columns'} iconStyle="circle" />
					<div className="consoleBtSection">
						<Button
							style={{ padding: '2px 5px' }}
							variant="light"
							onClick={() => {
								console.log(InitData);
							}}
						>
							> Console
						</Button>
					</div>
				</div>
				<br />
				<h5>테이블</h5>
				<CreateTable
					keyField={keyField}
					data={InitData}
					columns={columns}
					onChange={(dataField, cell, row, rowIndex, value) =>
						console.log(dataField, cell, row, rowIndex, value)}
				/>
			</div>
		);
	};

	TestTable = (name, columns, InitData, keyField) => {
		return (
			<Tab eventKey={name} title={name}>
				{this.TestTableItem(columns, InitData, keyField)}
			</Tab>
		);
	};

	render() {
		return (
			<div className="App">
				<h3>tfsm-formset 예제</h3>
				<br />
				<Tabs defaultActiveKey="Table">
					<Tab eventKey="API" title="Form API">
						<Tabs defaultActiveKey="CodeGen">
							{this.Test('CodeGen', exL.CodeGen, exL.CodeGenInit)}
							{this.Test('Text', exL.Text, exL.TextInit)}
							{this.Test('Price', exL.Price, exL.PriceInit)}
							{this.Test('Hierarchy', exL.Hierarchy, exL.HierarchyInit, null, exL.HierarchySample)}
							{this.Test('ListSelect', exL.ListSelect, exL.ListSelectInit, null, null, exL.ListData)}
							{this.Test('Child', exL.Child, null, [
								<div key="Child1">Child1</div>,
								<div key="Child2">Child2</div>
							])}
							{this.Test('Select', exL.Select, exL.SelectInit)}
							{this.Test('UploadImage', exL.UploadImage, exL.UploadImageInit)}
							{this.Test('UploadImageSingle', exL.UploadImageSingle, exL.UploadImageSingleInit)}
							{this.Test('HtmlEditer', exL.HtmlEditer, exL.HtmlEditerInit)}

							{this.Test('Imageset', exL.Imageset, exL.ImagesetInit)}
							{this.Test('Tab', exL.Tab, null)}
							{this.Test('Textline', exL.Textline, exL.TextlineInit)}
							{this.Test('Date', exL.Date, exL.DateInit)}
							{this.Test('Option-오류', exL.Option, exL.OptionInit)}
							{this.Test('Switch', exL.Switch, exL.SwitchInit)}
							{this.Test('DatePicker', exL.DatePicker, exL.DatePickerInit)}
						</Tabs>
					</Tab>
					<Tab eventKey="Table" title="Table Format">
						<Tabs defaultActiveKey="DateTime">
							{this.TestTable('DateTime', exT.DateTime, exT.DateTimeInit)}
							{this.TestTable('Switch', exT.Switch, exT.SwitchInit)}
							{this.TestTable('Number', exT.Number, exT.NumberInit)}
							{this.TestTable('Image', exT.Image, exT.ImageInit)}
							{this.TestTable('Images', exT.Images, exT.ImagesInit)}
							{this.TestTable('Button', exT.Button, exT.ButtonInit)}
							{this.TestTable('Color', exT.Color, exT.ColorInit)}
							{this.TestTable('Jsonview', exT.Jsonview, exT.JsonInit)}
							<Tab eventKey={'Link'} title={'Link'}>
								{this.TestTableItem(exT.Link, exT.LinkInit)}
								{this.TestTableItem(exT.Link2, exT.LinkInit2)}
							</Tab>
							{this.TestTable('Array', exT.Array, exT.ArrayInit)}
							{this.TestTable('Table', exT.Table, exT.TableInit)}
							{this.TestTable('Icon', exT.Icon, exT.IconInit)}
						</Tabs>
					</Tab>
					<Tab eventKey="DOC" title="DOC">
						<h5>Code</h5>
						<SyntaxHighlighter className="consoleView" style={vscDarkPlus} language="jsx">
							{`
<CreatePage 
	ModifyMode={false} 
	DataStruct={struct}
	onSubmit={this.onSubmitDefault}
	hierarchyData={HierarchySample}
	ListData={ListData}>
		<ChildComponent/>
		<ChildComponent/>
		<ChildComponent/>
</CreatePage>
					`}
						</SyntaxHighlighter>
					</Tab>
				</Tabs>
			</div>
		);
	}
}
