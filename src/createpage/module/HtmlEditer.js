import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './HtmlEditer.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

//초기화
export const InitData = () => {
	return '';
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode) => {
	return (
		<div className="ItemViewRow" key={index}>
			<div className="ItemTitle">{item.name}</div>
			<br />
			<UploadBoard
				InitData={values[item.id]}
				onValueChange={(value) => handleChange({ target: { name: item.id, value: value } })}
			/>
		</div>
	);
};

class UploadBoard extends React.Component {
	constructor(props) {
		super(props);

		const contentBlock = htmlToDraft(this.props.InitData);
		if (contentBlock) {
			const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
			const editorState = EditorState.createWithContent(contentState);
			this.state = {
				editorState
			};
		}
	}
	onEditorStateChange = (editorState) => {
		this.setState({
			editorState
		});
		var value = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
		//console.log(value);
		this.props.onValueChange(value);
	};

	render() {
		return (
			<Editor
				defaultEditorState={this.state.editorState}
				toolbarClassName="editorToolbar"
				wrapperClassName="editorWrapper"
				editorClassName="editorBox"
				onEditorStateChange={this.onEditorStateChange}
				localization={{
					locale: 'ko'
				}}
			/>
		);
	}
}
