import React from 'react';
import ProductCodeGen from '../asset/ProductCodeGen';

//초기화
export const InitData = () => {
	return '';
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode) => {
	return (
		<div className="ItemView" key={index}>
			<div className="ItemTitle">{item.name}</div>
			<div className="ItemContent">
				<ProductCodeGen
					key={index}
					ModifyMode={ModifyMode}
					InitialValue={values[item.id]}
					name={item.id}
					onChange={handleChange}
					prefix={item.prefix}
				/>
			</div>
		</div>
	);
};
