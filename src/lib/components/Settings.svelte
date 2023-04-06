<script lang="ts">
	export let getImage = false;
	export let personalitiesSelection: number;
	export let lengthSelection: number;
	export let smartnessSelection: string;

	let personalities = [
		{ id: 1, text: `Creativo` },
		{ id: 0.0, text: `Conservador` }
	];

	let answersLength = [
		{ id: 400, text: `Largas` },
		{ id: 100, text: `Cortas` }
	];

	let smartness = [
		{ id: 'text-davinci-003', text: `Inteligente` },
		{ id: 'text-ada-001', text: `No tanto` }
	];
</script>

<div class="box settings">
	<h4>Características Bot</h4>
	<div class="setting_block">
		Personalidad
		<select bind:value={personalitiesSelection} disabled={getImage}>
			{#each personalities as personality}
				<option value={personality.id}>
					{personality.text}
				</option>
			{/each}
		</select>
	</div>
	<div class="setting_block">
		Largo respuestas
		<select bind:value={lengthSelection} disabled={getImage}>
			{#each answersLength as length}
				<option value={length.id}>
					{length.text}
				</option>
			{/each}
		</select>
	</div>
	<div class="setting_block">
		Inteligencia
		<select bind:value={smartnessSelection} disabled={getImage}>
			{#each smartness as level}
				<option value={level.id}>
					{level.text}
				</option>
			{/each}
		</select>
	</div>
	<div class="ask_image">
		<input type="checkbox" bind:checked={getImage} />
		<label for="scales">Reply with Image?</label>
	</div>
</div>

<style>
	.ask_image {
		font-size: 1.2rem;
		margin-left: 15px;
		margin-top: 10px;
	}
	input[type='checkbox'] {
		transform: scale(1.5);
	}
	select {
		font-size: 1.2rem;
	}

	h4 {
		margin-top: 15px;
		margin-bottom: 15px;
	}

	.box {
		font-size: 1.3rem;
		padding: 10px;
		margin-top: 30px;
		margin-left: 30px;
		justify-content: end;
		border: 1px solid var(--gray-800);
		border-radius: 0.75rem;
		padding: 1.5rem;
		background-color: var(--gray-900);
		box-shadow: var(--shadow-sm);
	}

	.settings {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.setting_block {
		display: flex;
		flex-direction: column;
		margin-left: 10px;
		margin-right: 10px;
		padding-bottom: 10px;
	}

	.setting_block select {
		border-radius: 0.75rem;
		padding: 7px;
		margin-top: 10px;
		color: var(--gray-600);
	}
</style>
