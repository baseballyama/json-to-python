<script context="module" lang="ts">
	import { EditorView, minimalSetup, basicSetup } from 'codemirror';
	import type { Transaction } from '@codemirror/state';
	import { python } from '@codemirror/lang-python';
	import { setText, initEditorView } from './editor.helper';
	export { minimalSetup, basicSetup };
</script>

<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	const extensions = [basicSetup, python()];

	export let view: EditorView | undefined = undefined;
	export let doc: string;
	export let verbose = false;
	export let onUpdate: (tr: Transaction) => void = () => {};
	export let onChange: (editor: EditorView, tr: Transaction) => void = () => {};

	let dom: HTMLDivElement;
	let mounted = false;

	const editorTxHandler = (tr: Transaction, editor: EditorView) => {
		editor.update([tr]);
		if (verbose) onUpdate(tr);
		onChange(editor, tr);
	};

	$: {
		if (mounted && doc != undefined) {
			if (view == null) {
				view = initEditorView(doc, extensions, dom, editorTxHandler);
			}
		}
	}

	onMount(() => {
		mounted = true;
		return () => {
			mounted = false;
		};
	});

	onDestroy(() => view?.destroy());
</script>

<div class="codemirror" bind:this={dom}></div>

<style>
	.codemirror {
		display: contents;
	}
</style>
