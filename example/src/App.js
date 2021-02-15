import React from 'react';

import { CreatePage, CreateTable } from 'tfsm-formset/dist';
import 'tfsm-formset/dist/indexL.css';
import './App.css';
import { Button, Tab, Tabs } from 'react-bootstrap';
import * as exL from './exampleList';
import * as exT from './exampleTable';
import ReactJson from 'react-json-view';
import Highlight from 'react-highlight';

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
					<ReactJson src={struct.Struct} theme="ocean" name={'Struct'} />
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
					<ReactJson src={this.state.defaultdata} theme="ocean" name={'Output'} />
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
							<ReactJson src={InitData} theme="ocean" name={'Input'} />
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

							<ReactJson src={this.state.modifidata} theme="ocean" name={'Output'} />
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

	TestTable = () => {};

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
					<Tab eventKey="Table" title="Table API">
						{this.TestTable()}
					</Tab>
					<Tab eventKey="DOC" title="DOC">
						<h5>Code</h5>
						<Highlight className="consoleView" language="javascript">
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
						</Highlight>
					</Tab>
				</Tabs>
			</div>
		);
	}
}
