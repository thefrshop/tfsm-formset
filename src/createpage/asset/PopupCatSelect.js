import React from 'react';

import { Button, Modal, Spinner, Carousel } from 'react-bootstrap';
import './PopupCatSelect.css';
import update from 'react-addons-update';

import BootstrapTable from 'react-bootstrap-table-next';

class PopupCatSelect extends React.Component {
	constructor(props) {
		super(props);

		this.Table = [];

		var CategorySelect = [];

		var CategoryView = [];

		var prev = [];
		var next = [];
		var done = [];

		for (var i = 0; i < this.props.name.length; i++) {
			CategorySelect.push('');
			CategoryView.push([]);
			prev.push(false);
			next.push(false);
			done.push(false);
			this.Table.push(React.createRef());
		}

		this.state = {
			isloading: false,
			index: 0,
			direction: 0,
			CategorySelect: CategorySelect,
			CategoryView: CategoryView,
			prev: prev,
			next: next,
			done: done,
			last: []
		};
	}

	componentDidMount() {
		this.UpdateTable();
	}

	UpdateTable = () => {
		var CategoryView = [];
		for (var i = 0; i < this.props.name.length; i++) {
			CategoryView.push([]);
		}

		this.props.hierarchyData.forEach((view, index) => {
			if (index === 0) CategoryView[index] = view;
			else {
				view.forEach((viewitem) => {
					if (this.state.CategorySelect[index - 1].key === viewitem.pid) {
						CategoryView[index].push(viewitem);
					}
				});
			}
		});
		//console.log(CategoryView);

		return CategoryView;
	};

	allSelect = () => {};

	ViewTable = () => {
		var CategoryView = this.UpdateTable();

		//console.log('ViewTable', CategoryView);

		const columns = [
			{
				dataField: 'Code',
				text: '분류 코드'
			},
			{
				dataField: 'Name',
				text: '분류 이름'
			}
		];

		let table = [];
		this.props.name.forEach((item, catindex) => {
			//console.log(CategoryView[catindex].length);
			var sel = [];
			if (this.props.LastMulti && catindex === this.props.name.length - 1) {
				CategoryView[catindex].forEach((m) => sel.push(m.Code));
			}

			table.push(
				<Carousel.Item className="TableView" key={catindex}>
					<div className="TableTitle">{item}</div>
					{this.props.LastMulti && catindex === this.props.name.length - 1 ? (
						<div>
							<Button
								variant="Move"
								style={{ margin: '0 0 10px 0', width: '80px', height: 'auto' }}
								onClick={() => {
									var CategorySelect = this.state.CategorySelect;
									this.Table[catindex].current.selectionContext.selected = sel;
									this.setState({
										last: CategoryView[catindex],
										CategorySelect: CategorySelect,
										done: update(this.state.done, {
											[catindex]: { $set: true }
										})
									});
									this.forceUpdate();
								}}
							>
								전체선택
							</Button>
							<Button
								variant="Move"
								style={{ margin: '0 0 10px 5px', width: '80px', height: 'auto' }}
								onClick={() => {
									var CategorySelect = this.state.CategorySelect;
									this.Table[catindex].current.selectionContext.selected = [];
									this.setState({
										last: [],
										CategorySelect: CategorySelect,
										done: update(this.state.done, {
											[catindex]: { $set: false }
										})
									});
									this.forceUpdate();
								}}
							>
								전체해제
							</Button>
						</div>
					) : null}

					<BootstrapTable
						ref={this.Table[catindex]}
						data={CategoryView[catindex]}
						keyField="Code"
						orderField="Num"
						columns={columns}
						selectRow={this.selectRowProp(catindex)}
					/>
				</Carousel.Item>
			);
		});

		return (
			<Carousel
				activeIndex={this.state.index}
				direction={this.state.direction}
				onSelect={this.handleSelect}
				controls={false}
				indicators={false}
				interval={null}
			>
				{table}
			</Carousel>
		);
	};

	onSelect = (count, row, checked) => {
		var CategorySelect = this.state.CategorySelect;

		if (this.props.LastMulti && count === this.props.name.length - 1) {
			for (var i = 0; i < CategorySelect.length - 1; i++) {
				if (i === count) CategorySelect[i] = row;
				else if (i >= count) CategorySelect[i] = '';
			}

			if (checked === true)
				this.setState({
					last: update(this.state.last, {
						$push: [ row ]
					})
				});
			else {
				var index = this.state.last.findIndex((m) => (m = row));
				this.setState({
					last: update(this.state.last, {
						$splice: [ [ index, 1 ] ]
					})
				});
			}
		} else {
			for (var i = 0; i < CategorySelect.length; i++) {
				if (i === count) CategorySelect[i] = row;
				else if (i >= count) CategorySelect[i] = '';
			}
		}

		if (count === this.props.name.length - 1) {
			this.setState({
				CategorySelect: CategorySelect,
				done: update(this.state.done, {
					[count]: { $set: true }
				})
			});
		} else {
			this.setState({
				CategorySelect: CategorySelect,
				next: update(this.state.next, {
					[count]: { $set: true }
				})
			});
		}
		//console.log(this.Table[count].current);
	};
	onPrev = () => {
		this.MoveCarousel(this.state.index - 1);
		//console.log(this.Table[this.state.index].current);
		console.log(this.Table[this.state.index].current.selectionContext.selected);
		this.Table[this.state.index].current.selectionContext.selected = [];
		this.setState({
			CategorySelect: update(this.state.CategorySelect, {
				[this.state.index]: { $set: '' }
			}),
			done: update(this.state.done, {
				[this.state.index]: { $set: false }
			})
		});
	};

	onNext = () => {
		this.MoveCarousel(this.state.index + 1);
		this.setState({
			prev: update(this.state.prev, {
				[this.state.index + 1]: { $set: true }
			})
		});
	};

	MoveCarousel = (selectedIndex) => {
		if (selectedIndex === this.props.name.length - 1) this.setState({ last: [] });
		this.setState({
			index: selectedIndex
		});
	};

	selectRowProp = (count) => {
		if (count === this.props.name.length - 1 && this.props.LastMulti)
			return {
				mode: 'checkbox',
				hideSelectColumn: true,
				clickToSelect: true,
				onSelect: this.onSelect.bind(this, count),
				bgColor: '#ffffe0'
			};
		else
			return {
				mode: 'radio',
				hideSelectColumn: true,
				clickToSelect: true,
				onSelect: this.onSelect.bind(this, count),
				bgColor: '#ffffe0'
			};
	};

	onHide = () => {
		this.setState({
			index: 0
		});
		this.props.onHide();
	};

	ViewSelected = () => {
		//console.log(this.props.selected);
		let table = [];
		if (this.state.CategorySelect !== undefined) {
			this.state.CategorySelect.forEach((item, catindex) => {
				//console.log(item);
				if (catindex === this.state.index) {
					table.push(
						<div className="SelectedContents" key={catindex}>
							<div className="SelectedTitleCurrent">{this.props.name[catindex]}</div>
							<div className="SelectedBodyCurrent">{item[this.props.viewField]}</div>
						</div>
					);
				} else {
					table.push(
						<div className="SelectedContents" key={catindex}>
							<div className="SelectedTitle">{this.props.name[catindex]}</div>
							<div className="SelectedBody">{item[this.props.viewField]}</div>
						</div>
					);
				}
			});
		}

		return <div className="SelectedView">{table}</div>;
	};

	render() {
		return (
			<div className="PopupCatSelect">
				<Modal centered show={this.props.ispopup} size="md" onHide={this.onHide}>
					<Modal.Header closeButton>
						<div className="PopHeader">
							<div className="Title">{this.props.title}</div>
						</div>
					</Modal.Header>
					<Modal.Body className="PopBody">
						{this.ViewSelected()}

						{this.ViewTable()}
					</Modal.Body>
					<Modal.Footer className="PopFooter">
						<div className="MoveView">
							{!this.state.prev[this.state.index] ? null : (
								<Button variant="Move" className="FooterButton" onClick={() => this.onPrev()}>
									이전
								</Button>
							)}
						</div>

						<div>
							{!this.state.done[this.state.index] ? null : (
								<Button
									variant="Submit"
									className="FooterButton"
									onClick={() => {
										console.log(this.state.last);

										var OutCategorySelect = this.state.CategorySelect;
										if (this.props.LastMulti) {
											OutCategorySelect.splice(OutCategorySelect.length - 1, 1);
											Array.prototype.push.apply(OutCategorySelect, this.state.last);
											console.log(OutCategorySelect);
										}

										this.props.onOk(this.state.CategorySelect).then(() => {
											var CategorySelect = [];
											var prev = [];
											var next = [];
											var done = [];

											for (var i = 0; i < this.props.name.length; i++) {
												CategorySelect.push('');
												prev.push(false);
												next.push(false);
												done.push(false);
												this.Table.push(React.createRef());
											}

											this.setState({
												index: 0,
												direction: 0,
												CategorySelect: CategorySelect,
												prev: prev,
												next: next,
												done: done
											});
										});
									}}
								>
									완료
								</Button>
							)}
						</div>

						<div className="MoveView">
							{!this.state.next[this.state.index] ? null : (
								<Button variant="Move" className="FooterButton" onClick={() => this.onNext()}>
									다음
								</Button>
							)}
						</div>

						{!this.state.isloading ? null : (
							<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
						)}
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default PopupCatSelect;
