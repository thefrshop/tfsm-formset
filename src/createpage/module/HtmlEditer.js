import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './HtmlEditer.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import draftToMarkdown from 'draftjs-to-markdown';
import { markdownToDraft } from 'markdown-draft-js';

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
		var contentBlock;

		if (this.props.type !== undefined) {
			if (this.props.type.toLowerCase() === 'markdown') {
				contentBlock = markdownToDraft(this.props.InitData, {
					remarkablePreset: 'commonmark',
					remarkableOptions: {
						html: true,
						disable: {
							block: [ 'list' ]
						},
						preserveNewlines: true
					}
				});

				const contentState = convertFromRaw(contentBlock);
				const newEditorState = EditorState.createWithContent(contentState);
				this.state = {
					editorState: newEditorState
				};
			}
		} else {
			contentBlock = htmlToDraft(this.props.InitData);
			if (contentBlock) {
				const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
				const editorState = EditorState.createWithContent(contentState);
				this.state = {
					editorState
				};
			}
		}
	}
	onEditorStateChange = (editorState) => {
		this.setState({
			editorState
		});
		var value = '';
		if (this.props.type !== undefined) {
			if (this.props.type.toLowerCase() === 'markdown') {
				value = draftToMarkdown(convertToRaw(this.state.editorState.getCurrentContent()));
			}
		} else {
			value = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
		}

		console.log(value);
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
				toolbar={{
					options: [ 'inline', 'blockType', 'fontSize', 'fontFamily', 'textAlign', 'colorPicker', 'emoji' ]
				}}
			/>
		);
	}
}
