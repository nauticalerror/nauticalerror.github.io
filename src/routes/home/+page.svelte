<script>
	import HomeEntry from '$lib/components/HomeEntry.svelte';
</script>

<section class="background w-full">
	<div class="flex flex-col items-center justify-center gap-24">
		<div
			class="mt-24 flex w-full max-w-xs flex-row items-center justify-between rounded-full bg-white px-4 py-2 text-base text-black md:max-w-sm md:text-xl"
		>
			<div class="">all around the world</div>
			<div class="">
				<iconify-icon icon="ic:baseline-search" class=""></iconify-icon>
				<iconify-icon icon="ic:baseline-directions" class="text-accent-ocean text-lg"
				></iconify-icon>
			</div>
		</div>

		<HomeEntry place="cambridge & somerville, ma">i live here</HomeEntry>
		<HomeEntry place="middletown, ct">went to school</HomeEntry>
		<HomeEntry place="taipei, taiwan">study abroad</HomeEntry>
		<HomeEntry place="brescia, italy">year</HomeEntry>
		<HomeEntry place="bogor, indonesia">i still live here?</HomeEntry>
		<div class="h-24"></div>
	</div>
</section>

<style>
	.background::before {
		content: '';
		position: fixed;
		inset: 0;
		background-image: url('/assets/home/bg-map.png');
		background-size: cover;
		opacity: 0.6;
		z-index: -1;
	}
</style>
