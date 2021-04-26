import React from 'react';
import CatSelect from '../asset/CatSelect';

//초기화
export const InitData = () => {
	return [];
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode) => {
	if (item.HierarchyData.LastMulti) {
		//console.log('Multi');
		return (
			<div className="ItemViewRow" key={index}>
				<div className="ItemHeader">
					<div className="ItemTitle">{item.name}</div>
					<div className="ItemContent">
						<CatSelect
							InitialValue={values[item.id]}
							name={item.id}
							title={item.name}
							HierarchyNames={item.HierarchyData.name}
							viewField={item.HierarchyData.viewField}
							hierarchyData={M.props.hierarchyData[item.id]}
							selected={values[item.id]}
							onChange={handleChange}
							LastMulti={true}
						/>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="ItemView" key={index}>
				<div className="ItemTitle">{item.name}</div>
				<div className="ItemContent">
					<CatSelect
						InitialValue={values[item.id]}
						name={item.id}
						title={item.name}
						HierarchyNames={item.HierarchyData.name}
						viewField={item.HierarchyData.viewField}
						hierarchyData={M.props.hierarchyData[item.id]}
						selected={values[item.id]}
						onChange={handleChange}
					/>
				</div>
			</div>
		);
	}
};

const GetHierarchy = (values, item) => {
	let viewlist = [];

	const onRemove = (Selvalue) => {
		const RemoveData = values[item.Selectid].filter((arr) => arr[3].Code !== Selvalue[3].Code);
		console.log(RemoveData);
		/*
		this.setState({
			InitData: update(this.state.InitData, {
				[item.Selectid]: { $set: RemoveData }
			})
		});
		*/
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
