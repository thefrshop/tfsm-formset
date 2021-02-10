import React from 'react';

import ListSelect from '../asset/ListSelect';
import ViewList from '../asset/ViewList';

//초기화
export const InitData = () => {
	return '';
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode) => {
	return (
		<div className="ItemViewRow" key={index}>
			<div className="ItemHeader">
				<div className="ItemTitle">{item.name}</div>
				<div className="ItemContent">
					<ListSelect
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
};
