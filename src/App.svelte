<script lang="ts">
	import {
		Instractions,
		type Operations,
		NUMBER_OF_OPERATIONS,
		NUMBER_OF_REGISTERS,
		NUMBER_OF_OPERATION_TIME_MS,
	} from "./definitions";

	let asmValues: Operations = $state([]);
	let runningIndex = $state(-1);

	const init = () => {
		asmValues = Array.from({ length: NUMBER_OF_OPERATIONS }, () => ({
			instraction: undefined,
			operand1: Math.floor(Math.random() * 16),
			operand2: Math.floor(Math.random() * 16),
		}));
	};

	const setInstraction = (instraction: Instractions) => {
		const index = asmValues.findIndex(
			(value) => value.instraction === undefined,
		);
		asmValues[index].instraction = instraction;
	};

	const reset = () => {
		asmValues = Array.from({ length: NUMBER_OF_OPERATIONS }, () => ({
			instraction: undefined,
			operand1: Math.floor(Math.random() * 16),
			operand2: Math.floor(Math.random() * 16),
		}));
	};

	const clear = () => {
		asmValues = Array.from({ length: asmValues.length }, (_, k) => ({
			instraction: undefined,
			operand1: asmValues[k].operand1,
			operand2: asmValues[k].operand2,
		}));
	};

	const run = async () => {
		// Excute the operations
		for (let i = 0; i < asmValues.length; i++) {
			runningIndex = i;
			await new Promise((resolve) =>
				setTimeout(resolve, NUMBER_OF_OPERATION_TIME_MS),
			);
		}
		await new Promise((resolve) =>
			setTimeout(resolve, NUMBER_OF_OPERATION_TIME_MS),
		);
		runningIndex = -1;
	};

	init();
</script>

<main>
	<h1>Assembly Game Prototype</h1>
	<div class="registers">
		{#each Array.from({ length: NUMBER_OF_REGISTERS }, (_, k) => k) as register}
			<div class="register">
				<span>R{register}:</span>
				<span>0x0</span>
			</div>
		{/each}
	</div>
	<div class="operations">
		{#each asmValues as value, index}
			<div class="operation" class:running={runningIndex == index}>
				<span class="instraction">
					{#if value.instraction == undefined}
						xxx
					{:else}
						{value.instraction}
					{/if}
				</span>
				&nbsp;
				<span class="operation1">
					0x{value.operand1?.toString(16)}
				</span>
				&nbsp;
				<span class="operation2">
					0x{value.operand2?.toString(16)}
				</span>
			</div>
		{/each}
	</div>
	<div class="instractions">
		{#each Object.values(Instractions) as instraction}
			<button onclick={() => setInstraction(instraction)}>{instraction}</button>
		{/each}
	</div>
	<div>
		<button onclick={clear}>Clear</button>
		<button onclick={reset}>Reset</button>
		<button onclick={run}>Run</button>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.registers {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.registers > .register:first-child {
		border: yellow 0.1rem solid;
	}

	.registers > .register {
		padding: 0.1rem;
	}

	.operations > .operation {
		padding: 0.1rem;
		border: transparent 0.1rem solid;
	}

	.operations > .operation.running {
		border: yellow 0.1rem solid;
	}

	.instractions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.2rem;
	}

	button {
		border: white 0.1rem solid;
		background-color: transparent;
		border-radius: 0.1rem;
		font-family: inherit;
		font-size: 1.5rem;
	}

	button:hover {
		background-color: rgba(255, 255, 255, 0.5);
	}
</style>
