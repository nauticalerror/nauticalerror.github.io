<script lang="ts">
	import '$lib/styles/app.css';
	import favicon from '$lib/assets/favicon.svg';

	// from https://www.npmjs.com/package/iconify-icon?activeTab=readme
	import 'iconify-icon';

	let { children } = $props();
</script>

<svelte:head>
	<title>nautical error</title>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://api.iconify.design" />
</svelte:head>

<section class="h-full w-full">
	{@render children()}
</section>
