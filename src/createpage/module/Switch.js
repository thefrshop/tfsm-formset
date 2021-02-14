import React from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

//초기화
export const InitData = (item) => {
	if (item.default === undefined) return false;
	else return item.default;
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode, UpdateInitData) => {
	return (
		<div className="ItemViewRow" key={index} style={{ marginBottom: 20 }}>
			<div className="ItemHeader">
				<div className="ItemTitle">{item.name}</div>
				<div className="ItemContent">
					<BootstrapSwitchButton
						checked={values[item.id]}
						onChange={(value) => UpdateInitData(item.id, value)}
					/>
				</div>
			</div>
		</div>
	);
};
