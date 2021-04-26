import React from 'react';
import './HtmlEditer.css';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

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
					<UploadBoard
						type={item.type}
						InitData={values[item.id]}
						onValueChange={(value) => handleChange({ target: { name: item.id, value: value } })}
					/>
				</div>
			</div>
		</div>
	);
};

class UploadBoard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<CKEditor
					config={{
						language: 'ko'
					}}
					onReady={(editor) => {
						//console.log('Editor is ready to use!', editor);

						// Insert the toolbar before the editable area.
						editor.ui
							.getEditableElement()
							.parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());

						this.editor = editor;
					}}
					onError={({ willEditorRestart }) => {
						// If the editor is restarted, the toolbar element will be created once again.
						// The `onReady` callback will be called again and the new toolbar will be added.
						// This is why you need to remove the older toolbar.
						if (willEditorRestart) {
							this.editor.ui.view.toolbar.element.remove();
						}
					}}
					editor={DecoupledEditor}
					data={this.props.InitData}
					onChange={(event, editor) => {
						const data = editor.getData();
						this.props.onValueChange(data);
						//console.log({ event, editor, data });
					}}
				/>
			</div>
		);
	}
}
