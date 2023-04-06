<script lang="ts">
	import MessageBlock from './MessageBlock.svelte';
	import { beforeUpdate, afterUpdate } from 'svelte';
	import type { Message } from '../types';
	export let inputTextMessage: string;
	export let messages: Message[];
	export let sendMessage: () => void;
	let element: any;

	afterUpdate(() => {
		element.scroll({ top: element.scrollHeight, behavior: 'smooth' });
	});
</script>

<div class="chatbox">
	<scroll-container bind:this={element}>
		<div class="messages">
			{#each messages as message (message.id)}
				<MessageBlock {message} />
			{/each}
		</div>		
	</scroll-container>

	<form class="input-container" on:submit|preventDefault={sendMessage}>
		<input
			class="input-box"
			placeholder="Escribe tu mensaje"
			type="text"
			bind:value={inputTextMessage}
		/>
		<button class="btn btn-primary" type="submit">Enviar</button>
	</form>
</div>

<style>
	scroll-container {
		overflow: auto;
		scroll-behavior: smooth;
		margin-bottom: 10px;
		padding-right: 1rem;
	}

	::-webkit-scrollbar {
		width: 10px;
		display: block;
	}

	::-webkit-scrollbar-thumb {
		background: var(--accent-subtle-overlay);
		border-radius: 0.75rem;
	}

	::-webkit-scrollbar-thumb:active {
		background-color: var(--gray-999_40);
	}

	::-webkit-scrollbar-thumb:hover {
		background: #84f661;
		box-shadow: var(--shadow-lg);
	}

	::-webkit-scrollbar-track {
		background: var(--gray-100);
		border-radius: 0.75rem;
	}

	::-webkit-scrollbar-track:hover,
	::-webkit-scrollbar-track:active {
		background: #d4d4d4;
	}

	.chatbox {
		display: flex;
		width: 90%;
		flex-direction: column;
		justify-content: end;
		font-size: 1.3rem;
		padding: 10px;
		margin-top: 30px;
		margin-bottom: 30px;
		margin-left: 30px;
		justify-content: end;
		border: 1px solid var(--gray-800);
		border-radius: 0.75rem;
		padding: 1.5rem;
		background-color: var(--gray-900);
		box-shadow: var(--shadow-sm);
	}

	input {
		border: none;
		background-image: none;
		background-color: white;
		padding: 0.5rem 1rem;
		margin-right: 1rem;
		border-radius: 0.75rem;
		box-shadow: 0 0 1rem rgba(black, 0.1), 0rem 1rem 1rem -1rem rgba(black, 0.2);
		font-weight: 400;
		font-size: 1.2rem;
		letter-spacing: 0.025em;
	}

	.messages {
		flex-grow: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: end;		
	}

	.input-container {
		display: flex;
	}

	.input-box {
		flex-grow: 1;
	}

	.btn {
		font-weight: 300;
		line-height: 1.53;
		color: #697a8d;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		user-select: none;
		background-color: transparent;
		border: 1px solid transparent;
		padding: 0.4375rem 1.25rem;
		font-size: 1.2rem;
		border-radius: 0.375rem;
		transition: all 0.2s ease-in-out;
	}

	.btn:hover {
		color: #697a8d;
	}

	.btn-primary {
		color: var(--gray-600);
		background-color: #84f661;
		border-color: #84f661;
		box-shadow: 0 0.125rem 0.25rem 0 rgba(105, 108, 255, 0.4);
	}

	.btn-primary:hover {
		color: var(--gray-600);
		background-color: #84f661;
		border-color: #84f661;
		transform: translateY(-1px);
	}

	.btn-primary:disabled {
		border: 1px solid #999999;
		background-color: #cccccc;
		color: var(--gray-600);
		box-shadow: 0 0.125rem 0.25rem 0 rgba(141, 141, 141, 0.4);
	}

	@media (max-width: 800px) {
		.input-container {
			display: contents;
		}
		.input-box {
			width: 100%;
			margin-right: 1rem;
		}

		.btn {
			margin-top: 2rem;
			width: 100%;
			margin-left: 16px;
		}
		.chatbox {
			padding-right: 3rem;
		}
	}
</style>
