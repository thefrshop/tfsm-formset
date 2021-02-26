import React from 'react';
import { Form, Button } from 'react-bootstrap';

//초기화
export const InitData = () => {
	return '';
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode, ViewCallback) => {
	return (
		<div className="ItemViewRow" key={index}>
			<div className="ItemHeader">
				<div className="ItemTitle">{item.name}</div>
				<div className="ItemContent">
					<Form.Control
						type={'text'}
						value={values[item.id]}
						className="TextInput"
						name={item.id}
						placeholder="쉼표(,)로 구분"
						onChange={handleChange}
						{...item.props}
					/>
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
						onClick={() => {
							let dat = [];
							var strArray = M.state.InitData[item.id].split(',');
							strArray.forEach((value) => {
								if (value.trim() !== '') dat.push({ name: value.trim(), price: 0 });
							});
							ViewCallback(item.Selectid, dat);
						}}
					>
						추가
					</Button>
				</div>
			</div>
			<div className="ItemBody">
				<div className="ViewListformBox">{M.GetSetOption(values, item)}</div>
			</div>
		</div>
	);
};
