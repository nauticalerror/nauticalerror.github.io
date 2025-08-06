<script lang="ts">
	import Dither from '$lib/components/Dither.svelte';
	import { page } from '$app/state';
	import md from '$lib/utils/md';

	let copy = page.data;
</script>

<section class="mx-auto h-screen w-full">
	<Dither>
		<div class="content-format flex flex-col gap-8 py-24">
			<h2 class="text-accent-green heading-2">{@html md(copy.hed)}</h2>
			<p class="body text-white">{@html md(copy.about)}</p>
		</div>
	</Dither>
</section>
