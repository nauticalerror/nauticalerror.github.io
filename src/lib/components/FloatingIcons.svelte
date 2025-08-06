<script lang="ts">
	const { class: classes = '', spin, radius = 300 } = $props();

	let images = [
		{ label: 'about', src: '/assets/home/jaeger.png', href: '/tree' },
		{ label: 'links', src: '/assets/home/skate.png', href: '/tree' },
		{ label: 'test1', src: '/assets/home/tree.jpg', href: '/tree' },
		{ label: 'test2', src: '/assets/home/indomie.png', href: '/tree' },
		{ label: 'links', src: '/assets/home/skate.png', href: '/tree' },
		{ label: 'links', src: '/assets/home/jaeger.png', href: '/tree' },
		{ label: 'links', src: '/assets/home/indomie.png', href: '/tree' },
		{ label: 'links', src: '/assets/home/skate.png', href: '/tree' }
	];

	function getPosition(index: number, total: number, radius: number) {
		const angle = (index * 2 * Math.PI) / total;
		const x = Math.cos(angle) * radius;
		const y = Math.sin(angle) * radius;
		return { x, y, angle };
	}
</script>

<!-- style:rotate={`${Math.random() * 360}deg`}  -->

<div class="relative {classes}">
	{#each images as { label, src, href }, i (i)}
		{@const position = getPosition(i, images.length, radius)}
		<div
			class={['absolute inset-0 -translate-y-10 translate-x-10', spin ? 'orbit' : ''].join(' ')}
			style:animation-duration={spin ? `${Math.random() * 20 + 20}s` : undefined}
			style:scale={`${Math.random() * 0.8 + 1}`}
			style:--radius={`${radius}px`}
			style:--start-angle={`${position.angle}rad`}
		>
			<img {src} alt={label} class="w-24 rounded" />
			<p
				class="pointer-events-auto absolute inset-0 flex items-center justify-center text-center text-sm font-bold text-white drop-shadow"
			>
				<a {href}>{label}</a>
			</p>
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
