import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

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
				<TextareaAutosize
					value={values[item.id]}
					className="TextInput"
					required={item.required}
					name={item.id}
					onChange={handleChange}
					minRows={5}
					maxRows={10}
				/>
			</div>
		</div>
	);
};
