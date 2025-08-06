<script lang="ts">
	import md from '$lib/utils/md';

	interface Props {
		open?: boolean;
		class?: string;
		collapsible?: boolean;
		messages: Array<{ sender: string; time: string; message: string }>;
	}

	let { class: classes = '', open = false, collapsible = true, messages }: Props = $props();
</script>

<div class={['window border-3 body my-8 w-full max-w-md border-white bg-white', classes]}>
	{#if collapsible}
		<details {open}>
			<summary class="cursor-pointer list-none">
				<div class="relative w-full">
					<div class="bg-blue-deep relative h-6 w-full">
						<div
							class="window border-gray text-gray absolute right-2 top-1/2 flex h-3 w-3 -translate-y-1/2 transform items-center justify-center border bg-white pb-[1px] text-xs leading-none"
						>
							x
						</div>
					</div>
				</div>
				<div class="text-gray flex justify-between px-4 py-2 text-sm">
					<div class="uppercase">{@html md(messages.sender)}</div>
					<div class="">{@html md(messages.time)}</div>
				</div>
			</summary>

			<div class="px-4 py-2 {classes}">
				<div class="text-base text-black">{@html md(messages.message)}</div>
			</div>
		</details>
	{:else}
		<div class="relative w-full">
			<div class="bg-blue-deep relative h-6 w-full">
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
					<div class="uppercase">{@html md(msg.sender)}</div>
					<div class="text-gray">{@html md(msg.time)}</div>
				</div>
				<div class="px-4 pb-2">
					<div class="text-base text-black">{@html md(msg.message)}</div>
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
