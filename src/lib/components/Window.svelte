<script lang="ts">
	import md from '$lib/utils/md';

	interface Props {
		open?: boolean;
		class?: string;
		collapsible?: boolean;
		messages: Array<{ title: string; content: string }>;
	}

	let { class: classes = '', open = false, collapsible = true, messages }: Props = $props();
</script>

<div class={['window border-3 my-8 w-full max-w-md border-white bg-white', classes]}>
	{#if !collapsible}
		<div class="relative w-full">
			<div class="bg-accent-blue relative h-6 w-full">
				<div
					class="window border-gray text-gray absolute right-2 top-1/2 flex h-3 w-3 -translate-y-1/2 transform items-center justify-center border bg-white pb-[1px] text-xs leading-none"
				>
					x
				</div>
			</div>
		</div>
		<div class="text-gray flex justify-between px-4 py-2">
			<div class="window-title">{@html md(messages.title)}</div>
		</div>

		<div class="px-4 py-2 {classes}">
			<div class="body text-black">{@html md(messages.content)}</div>
		</div>
	{:else if collapsible}
		<details {open}>
			<summary class="cursor-pointer list-none">
				<div class="relative w-full">
					<div class="bg-accent-blue relative h-6 w-full">
						<div
							class="window border-gray text-gray absolute right-2 top-1/2 flex h-3 w-3 -translate-y-1/2 transform items-center justify-center border bg-white pb-[1px] text-xs leading-none"
						>
							x
						</div>
					</div>
				</div>
				<div class="text-gray flex justify-between px-4 py-2">
					<div class="window-title">{@html md(messages.title)}</div>
				</div>
			</summary>

			<div class="px-4 py-2 {classes}">
				<div class="body text-black">{@html md(messages.content)}</div>
			</div>
		</details>
	{:else}
		<div class="relative w-full">
			<div class="bg-accent-blue relative h-6 w-full">
				<div
					class="window border-gray text-gray absolute right-2 top-1/2 flex h-3 w-3 -translate-y-1/2 transform items-center justify-center border bg-white pb-[1px] text-xs leading-none"
				>
					x
				</div>
			</div>
		</div>
		{#each messages as msg, i}
			<div class={i > 0 ? 'border-t border-gray-300' : ''}>
				<div class="text-gray flex justify-between px-4 py-2 text-sm">
					<div class="">{@html md(msg.title)}</div>
				</div>
				<div class="px-4 pb-2">
					<div class="body text-black">{@html md(msg.content)}</div>
				</div>
			</div>
		{/each}
	{/if}
</div>

<style>
	summary::-webkit-details-marker {
		display: none;
	}
	summary::marker {
		display: none;
	}

	.window {
		border-style: outset;
	}
</style>
