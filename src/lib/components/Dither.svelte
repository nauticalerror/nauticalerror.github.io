<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { children, class: classes = '' }: Props = $props();
</script>

<div class="bg-accent-green relative inline-block h-full w-full">
	<!-- <div class="dither-overlay"></div> -->
	<div class="dither-img block h-auto w-full">{@render children()}</div>
</div>

<style>
	.dither-img {
		image-rendering: pixelated;
	}

	.dither-overlay {
		position: absolute;
		inset: 0;
		pointer-events: none;

		background-image:
			/* radial-gradient(circle, rgba(34, 0, 255, 0.3) 1px, transparent 1px),
			radial-gradient(circle, rgba(30, 225, 255, 0.3) 1px, transparent 1px); */
			radial-gradient(circle, rgba(34, 0, 255, 0.3) 1px, transparent 1px),
			radial-gradient(circle, rgba(255, 0, 0, 0.3) 1px, transparent 1px),
			radial-gradient(circle, rgba(0, 255, 13, 0.3) 1px, transparent 1px);
		background-size: 4px 4px;
		background-position:
			0 0,
			2px 2px;

		mix-blend-mode: lighten;
		opacity: 0.7;
	}
</style>
