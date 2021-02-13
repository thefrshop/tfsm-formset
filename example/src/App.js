import React from 'react';

import { CreatePage } from 'tfsm-formset/dist';
import 'tfsm-formset/dist/index.css';
import './App.css';
import { Tab, Tabs } from 'react-bootstrap';
import * as ex from './exampleList';
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

							<ReactJson src={this.state.modifidata} theme="ocean" name={'Output'} />
						</div>
						<br />
					</div>
				)}
			</Tab>
		);
	};

	render() {
		return (
			<div className="App">
				<h3>tfsm-formset 예제</h3>
				<br />
				<Tabs>
					<Tab eventKey="API" title="API">
						<Tabs defaultActiveKey="DatePicker">
							{this.Test('CodeGen', ex.CodeGen, ex.CodeGenInit)}
							{this.Test('Text', ex.Text, ex.TextInit)}
							{this.Test('Price', ex.Price, ex.PriceInit)}
							{this.Test('Hierarchy', ex.Hierarchy, ex.HierarchyInit, null, ex.HierarchySample)}
							{this.Test('ListSelect', ex.ListSelect, ex.ListSelectInit, null, null, ex.ListData)}
							{this.Test('Child', ex.Child, null, [
								<div key="Child1">Child1</div>,
								<div key="Child2">Child2</div>
							])}
							{this.Test('Select', ex.Select, ex.SelectInit)}
							{this.Test('UploadImage', ex.UploadImage, ex.UploadImageInit)}
							{this.Test('HtmlEditer', ex.HtmlEditer, ex.HtmlEditerInit)}

							{this.Test('Imageset', ex.Imageset, ex.ImagesetInit)}
							{this.Test('Tab', ex.Tab, null)}
							{this.Test('Textline', ex.Textline, ex.TextlineInit)}
							{this.Test('Date', ex.Date, ex.DateInit)}
							{this.Test('Option-오류', ex.Option, ex.OptionInit)}
							{this.Test('Switch', ex.Switch, ex.SwitchInit)}
							{this.Test('DatePicker', ex.DatePicker, ex.DatePickerInit)}
						</Tabs>
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
