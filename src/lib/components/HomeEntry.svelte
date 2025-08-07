<script>
	let { place, children } = $props();
</script>

<div class="flex w-full max-w-4xl flex-col gap-2 px-4 lg:px-0">
	<h2 class="heading-2 stroke-3 stroke text-black">{place}</h2>
	<div class="broider bg-[url('/assets/home/bg-post.png')]">{@render children()}</div>
</div>
