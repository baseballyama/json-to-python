import { EditorView } from 'codemirror';
import type { Extension, Transaction } from '@codemirror/state';

export const setText = (view: EditorView | undefined, text: string) => {
	view?.dispatch({
		changes: { from: 0, to: view.state.doc.length, insert: text }
	});
};

export const initEditorView = (
	initialDoc: string,
	extensions: Extension,
	dom: HTMLElement,
	editorTxHandler: (tr: Transaction, editor: EditorView) => void
): EditorView => {
	console.log('initEditorView');
	return new EditorView({
		doc: initialDoc,
		extensions,
		parent: dom,
		dispatch: editorTxHandler
	});
};
