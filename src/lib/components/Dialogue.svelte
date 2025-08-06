<script lang="ts">
	import md from '$lib/utils/md';

	interface DialogueLine {
		laurel?: string;
		kai?: string;
		ben?: string;
		clove?: string;
		wren?: string;
	}

	interface Props {
		lines: DialogueLine[];
		character?: string | null;
	}

	let { lines, character = $bindable() }: Props = $props();
</script>

<div class="fixed top-0 z-50 w-full bg-black">
	<div class="body flex flex-row justify-end space-x-1 p-2 text-white">
		<p>character:</p>
		<p class="inline-block min-w-[6ch] text-white">{character || '—'}</p>
	</div>
</div>

{#each lines as line}
	{#if line.laurel}
		<p
			class="character-laurel"
			onmouseenter={() => (character = 'LAUREL')}
			onmouseleave={() => (character = null)}
		>
			{@html md(line.laurel)}
		</p>
	{:else if line.kai}
		<p
			class="character-kai"
			onmouseenter={() => (character = 'KAI')}
			onmouseleave={() => (character = null)}
		>
			{@html md(line.kai)}
		</p>
	{:else if line.ben}
		<p
			class="character-ben"
			onmouseenter={() => (character = 'BEN')}
			onmouseleave={() => (character = null)}
		>
			{@html md(line.ben)}
		</p>
	{:else if line.clove}
		<p
			class="character-clove"
			onmouseenter={() => (character = 'CLOVE')}
			onmouseleave={() => (character = null)}
		>
			{@html md(line.clove)}
		</p>
	{:else if line.wren}
		<p
			class="character-wren"
			onmouseenter={() => (character = 'WREN')}
			onmouseleave={() => (character = null)}
		>
			{@html md(line.wren)}
		</p>
	{/if}
{/each}
