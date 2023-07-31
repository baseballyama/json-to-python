<script lang="ts">
	import type { EditorView } from 'codemirror';
	import type { Transaction } from '@codemirror/state';
	import Editor from '$lib/Editor.svelte';
	import GitHub from '$lib/GitHub.svelte';
	import { generate, type Config } from 'json-to-typeddict';

	export let data: import('./$types').PageData;

	let mainCLassName = 'Main';
	let casingConfig: Config['casing'] = 'none';
	let generateConfig: Config['generate'] = 'typeddict';
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
	let python = generate(doc, mainCLassName, { casing: casingConfig, generate: generateConfig });

	const changeHandler = (_: EditorView, tr: Transaction) => {
		doc = tr.state.doc.toString();
	};

	$: {
		if (mainCLassName && doc) {
			try {
				python = generate(doc, mainCLassName, { casing: casingConfig, generate: generateConfig });
			} catch (e) {}
		}
	}
</script>

<div class="wrapper">
	<div class="content">
		<header class="header">
			<div>
				<h1>JSON to Python Converter (version {data.version})</h1>
				<p>Convert JSON to Python TypedDict or dataclass</p>
			</div>
			<div class="gh-wrapper">
				<GitHub href="https://github.com/baseballyama/json-to-typeddict" />
			</div>
		</header>

		<section class="config">
			<h2>Configuration</h2>
			<form on:submit|preventDefault>
				<div class="form-item">
					<label for="mainClassName">Main Class Name:</label>
					<input
						type="text"
						id="mainClassName"
						name="mainClassName"
						required
						bind:value={mainCLassName}
					/>
				</div>
				<div class="form-item">
					<label for="casing">Casing:</label>
					<select id="casing" name="selection" bind:value={casingConfig}>
						<option value="none" selected>None</option>
						<option value="camel">Camel</option>
						<option value="snake">Snake</option>
					</select>
				</div>
				<div class="form-item">
					<label for="generate">Generate:</label>
					<select id="generate" name="selection" bind:value={generateConfig}>
						<option value="typeddict" selected>typeddict</option>
						<option value="dataclass">dataclass</option>
					</select>
				</div>
			</form>
		</section>

		<section class="editors">
			<div class="editor-wrapper">
				<div>
					<h2>JSON</h2>
					<Editor {doc} onChange={changeHandler}></Editor>
				</div>
			</div>
			<div class="arrow arrow-pc">→</div>
			<div class="arrow arrow-sp">↓</div>
			<div class="editor-wrapper">
				<div>
					<h2>Python TypedDict (Generated)</h2>
					{#key python}
						<Editor doc={python} />
					{/key}
				</div>
			</div>
		</section>
	</div>

	<footer class="footer">
		<a href="https://github.com/baseballyama" target="_blank" rel="noopener noreferrer">
			Created by baseballyama
		</a>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	h1,
	h2 {
		margin: 0;
		padding: 8px 0;
	}

	p {
		margin: 0;
		padding: 0;
	}

	.wrapper {
		height: 100vh;
		margin: 0;
		display: flex;
		flex-direction: column;
	}

	.content {
		flex: 1 0 auto;
	}

	.footer {
		width: calc(100% - 32px);
		padding: 8px 16px;
		text-align: center;
		flex-shrink: 0;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 8px 16px;
	}

	.gh-wrapper {
		margin-left: 16px;
		height: 32px;
		width: 32px;
	}

	.config {
		margin: 8px;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 8px;
	}

	.form-item {
		padding: 4px;
		display: flex;
		align-items: center;
	}

	.form-item > label {
		display: inline-block;
		width: 160px;
	}

	.editors {
		display: flex;
	}

	.editors > * {
		display: flex;
		align-items: top;
	}

	.editors > .arrow {
		font-size: 24px;
		font-weight: 900;
	}

	.editors > .arrow-pc {
		height: 100%;
		margin: auto 8px;
	}

	.editors > .arrow-sp {
		margin: 8px auto;
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

	select {
		height: 32px;
		min-width: 160px;
	}

	input {
		height: 24px;
		min-width: 152px;
	}

	@media (max-width: 767px) {
		.editors {
			flex-direction: column;
		}
		.arrow-pc {
			display: none;
		}
	}

	@media (min-width: 768px) {
		.editors {
			flex-direction: row;
		}
		.arrow-sp {
			display: none;
		}
	}
</style>
