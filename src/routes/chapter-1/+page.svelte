<script lang="ts">
	import Chapter from '$lib/components/Chapter.svelte';
	import Message from '$lib/components/Message.svelte';
	import Dialogue from '$lib/components/Dialogue.svelte';
	import Dither from '$lib/components/Dither.svelte';
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import md from '$lib/utils/md';

	let copy = page.data;
	let character = $state();
</script>

<Chapter>
	<Dither src={base + '/assets/chapter-1/subway.gif'} alt={copy.img_alts.subway} />

	<Message messages={copy.text} />

	<Dialogue lines={copy.dialogue_1} bind:character />

	<Message messages={copy.text_2} collapsible={false} class="h-60 overflow-scroll" />

	<Dialogue lines={copy.dialogue_2} bind:character />
</Chapter>
