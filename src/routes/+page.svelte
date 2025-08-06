<script lang="ts">
	import Dither from '$lib/components/Dither.svelte';
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import md from '$lib/utils/md';

	let copy = page.data.landing;

	let scale = 1;
	let grow: number;
	let shrink: number;
	let hovered = false;

	const onMouseEnter = () => {
		hovered = true;
		cancelAnimationFrame(grow);
		const growStep = () => {
			scale += 0.01;
			if (scale < 100) {
				grow = requestAnimationFrame(growStep);
			}
		};
		grow = requestAnimationFrame(growStep);
	};

	const onMouseLeave = () => {
		hovered = false;
		cancelAnimationFrame(grow);
		const shrinkStep = () => {
			scale -= 0.01;
			if (scale > 1) {
				shrink = requestAnimationFrame(shrinkStep);
			}
		};
		shrink = requestAnimationFrame(shrinkStep);
	};
</script>

<section class="mx-auto h-screen w-full">
	<Dither>
		<div class="flex h-screen w-full flex-col items-center justify-center">
			<a href={base + '/chapter-1'}>
				<img
					src={base + '/assets/landing/tree.jpg'}
					alt="tree"
					style="transform: scale({scale}); transition: transform 1s ease-out"
					class={`w-sm origin-center ${!hovered ? 'animate-wiggle' : ''}`}
					onmouseenter={onMouseEnter}
					onmouseleave={onMouseLeave}
				/>
			</a>
			<!-- rotate-7 w-sm transition-transform duration-300 ease-in-out hover:rotate-0 -->

			<h1 class="heading-1 text-accent-green mt-[-2rem] mix-blend-difference">
				{@html md(copy.hed)}
			</h1>

			<a href={base + '/about'}>
				<p class="heading-3 hover:drop-shadow-accent-green text-white hover:drop-shadow-xl">
					about
				</p>
			</a>
		</div>
	</Dither>
</section>
