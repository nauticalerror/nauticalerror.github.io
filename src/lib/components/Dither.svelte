<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		src?: string;
		alt?: string;
		class?: string;
		children: Snippet;
	}

	let { children, class: classes = '', src, alt }: Props = $props();
</script>

{#if src}
	<div class="dither-wrapper-img">
		<img {src} {alt} class={['dither-img', classes]} />
		<div class="dither-overlay"></div>
	</div>
{:else}
	<div class="dither-wrapper-page">
		<div class="dither-img">{@render children()}</div>
		<div class="dither-overlay"></div>
	</div>
{/if}

<style>
	.dither-wrapper-img {
		position: relative;
		display: inline-block;
	}

	.dither-wrapper-page {
		position: relative;
		display: inline-block;
		width: 100%;
		height: 100%;
	}

	.dither-img {
		display: block;
		width: 100%;
		height: auto;
		image-rendering: pixelated;
	}

	.dither-overlay {
		position: absolute;
		inset: 0;
		pointer-events: none;

		background-image:
			radial-gradient(circle, rgba(3, 40, 30, 0.3) 5px, transparent 1px),
			radial-gradient(circle, rgba(212, 222, 138, 0.3) 1px, transparent 1px);
		background-size: 4px 4px;
		background-position:
			0 0,
			2px 2px;

		mix-blend-mode: lighten;
		opacity: 0.7;
	}
</style>
