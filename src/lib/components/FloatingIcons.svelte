<script lang="ts">
	import { onMount } from 'svelte';

	const { class: classes = '' } = $props();

	let windowWidth = $state(0);

	let radius = $derived(windowWidth >= 768 ? 300 : 100);

	let images = [
		{ label: 'media', src: '/assets/landing/jaeger.png', href: '/' },
		{ label: 'sports', src: '/assets/landing/skate.png', href: '/' },
		{ label: 'nature', src: '/assets/landing/watermelon.png', href: '/' },
		{ label: 'food', src: '/assets/landing/indomie.png', href: '/' },
		{ label: 'blog', src: '/assets/landing/notebook.png', href: '/' },
		{ label: 'home', src: '/assets/landing/keys.png', href: '/home' },
		{ label: 'music', src: '/assets/landing/walkman.png', href: '/' }
	];

	onMount(() => {
		windowWidth = window.innerWidth;

		const handleResize = () => {
			windowWidth = window.innerWidth;
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	function getPosition(index: number, total: number) {
		const angle = (index * 2 * Math.PI) / total;
		const x = Math.cos(angle) * radius;
		const y = Math.sin(angle) * radius;
		return { x, y, angle };
	}
</script>

<div class="relative {classes}">
	{#each images as { label, src, href }, i (i)}
		{@const position = getPosition(i, images.length)}
		<div
			class={['orbit absolute inset-0 -translate-y-10 translate-x-10'].join(' ')}
			style:animation-duration={`${Math.random() * 20 + 30}s`}
			style:scale={`${Math.random() * 0.8 + 1}`}
			style:--radius={`${radius}px`}
			style:--start-angle={`${position.angle}rad`}
		>
			<div class="group relative">
				<a {href} class="relative flex flex-col no-underline hover:bg-transparent">
					<img
						{src}
						alt={label}
						class="group-hover:rotate-10 transition-transform duration-300 ease-in-out group-hover:scale-110"
					/>
					<p
						class="bg-accent-blue pointer-events-auto flex h-fit w-fit items-center justify-center text-center font-mono text-xs text-white drop-shadow md:text-sm"
					>
						{label}
					</p>
				</a>
			</div>
		</div>
	{/each}
</div>

<style>
	@keyframes orbit {
		from {
			transform: translate(-50%, -50%) rotate(var(--start-angle)) translateX(var(--radius))
				rotate(calc(-1 * var(--start-angle)));
		}
		to {
			transform: translate(-50%, -50%) rotate(calc(var(--start-angle) + 360deg))
				translateX(var(--radius)) rotate(calc(-1 * var(--start-angle) - 360deg));
		}
	}

	.orbit {
		animation: orbit linear infinite;
	}
</style>
