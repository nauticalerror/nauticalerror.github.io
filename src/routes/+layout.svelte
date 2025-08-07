<script lang="ts">
	import '$lib/styles/app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>nautical error</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<section class="h-full w-full">
	{@render children()}
</section>
