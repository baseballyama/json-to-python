<script lang="ts">
	import type { EditorView } from 'codemirror';
	import type { Transaction } from '@codemirror/state';
	import Editor from '$lib/Editor.svelte';
	import GitHub from '$lib/GitHub.svelte';
	import { generate } from 'json-to-typeddict';

	let mainCLassName = 'Main';
	let doc = JSON.stringify(
		{
			name: 'John',
			age: 30,
			pets: ['dog', 'cat'],
			address: {
				street: '123 Main St',
				city: 'New York',
				postalCode: '10001'
			},
			isEmployed: true,
			vehicles: null,
			extra: ['hello', 1, true]
		},
		null,
		2
	);
	let python = generate(doc, mainCLassName);

	const changeHandler = (_: EditorView, tr: Transaction) => {
		doc = tr.state.doc.toString();
	};

	$: {
		if (mainCLassName && doc) {
			try {
				python = generate(doc, mainCLassName);
			} catch (e) {}
		}
	}
</script>

<header class="header">
	<h1>JSON to Python TypedDict Converter</h1>
	<div class="gh-wrapper">
		<GitHub href="https://github.com/baseballyama/json-to-typeddict" />
	</div>
</header>

<section class="config">
	<h2>Configuration</h2>
	<form on:submit|preventDefault>
		<label for="mainClassName">Main Class Name:</label>
		<input
			type="text"
			id="mainClassName"
			name="mainClassName"
			required
			bind:value={mainCLassName}
		/>
	</form>
</section>

<section class="editors">
	<div class="editor-wrapper">
		<div>
			<h2>JSON</h2>
			<Editor {doc} onChange={changeHandler}></Editor>
		</div>
	</div>
	<div class="arrow">→</div>
	<div class="editor-wrapper">
		<div>
			<h2>Python TypedDict (Generated)</h2>
			<Editor doc={python} />
		</div>
	</div>
</section>

<footer class="footer">
	<a href="https://github.com/baseballyama" target="_blank" rel="noopener noreferrer">
		Created by baseballyama
	</a>
</footer>

<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 8px 16px;
	}

	.gh-wrapper {
		height: 32px;
		width: 32px;
	}

	.config {
		margin: 8px;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 8px;
	}

	.editors {
		display: flex;
	}

	.editors > * {
		display: flex;
		align-items: center;
	}

	.editors > .arrow {
		font-size: 24px;
		font-weight: 900;
		margin: 0 8px;
	}

	.editors > .editor-wrapper {
		flex: 1;
		margin: 8px;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 8px;
	}

	.editors > .editor-wrapper > div {
		width: 100%;
	}

	.footer {
		width: calc(100% - 32px);
		padding: 8px 16px;
		text-align: center;
		position: absolute;
		bottom: 0;
		left: 0;
	}
</style>
