import React from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

//초기화
export const InitData = () => {
	return '';
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode, ViewCallback) => {
	return (
		<div className="ItemViewRow" key={index} style={{ marginBottom: 20 }}>
			<div className="ItemHeader">
				<div className="ItemTitle">{item.name}</div>
				<div className="ItemContent">
					<BootstrapSwitchButton
						checked={values[item.id]}
						onChange={(value) => ViewCallback(item.id, value)}
					/>
				</div>
			</div>
		</div>
	);
};
