<script lang="ts">
	import FloatingIcons from '$lib/components/FloatingIcons.svelte';
</script>

<section
	class="background relative flex h-screen w-full items-center justify-center overflow-hidden"
>
	<div class="pointer-events-auto absolute">
		<FloatingIcons class="w-10 md:w-20" />
	</div>
	<div
		class="pointer-events-none relative flex flex-col items-center justify-center gap-4 px-8 py-24"
	>
		<h1 class="heading-1 text-5xl sm:text-7xl">nautical error</h1>
		<div
			class="window drop-shadow-accent-blue pointer-events-auto my-8 w-full max-w-md border-4 border-gray-200 bg-white drop-shadow-xl"
		>
			<details class="max-h-[60vh] overflow-auto">
				<summary class="cursor-pointer list-none">
					<div class="relative w-full">
						<div class="bg-accent-blue top-0 h-6 w-full">
							<div
								class="window border-gray text-gray absolute right-2 top-1/2 flex h-3 w-3 -translate-y-1/2 transform items-center justify-center border bg-white pb-[1px] text-xs leading-none"
							>
								x
							</div>
						</div>
					</div>
					<div class="text-gray flex justify-between px-4 py-2">
						<div class="window-title">about me</div>
					</div>
				</summary>

				<div class="px-4 py-2">
					<div class="body flex flex-col gap-4 text-black">
						<p>hello! welcome to my corner of the internet!</p>
						<p>
							i'm flo. i created this site as a scrapbook to host and share bits of internet things
							i find interesting——music, links, blogs, thoughts, recipes, art, videos, and other
							digital trinkets.
						</p>
						<p>
							it's also a playground for me to exercise my coding and design muscles. everything you
							see here is hand-coded with sveltekit, (mostly) styled with tailwind, and deployed
							using github pages, all of which are free, accessible, and easy-ish to learn (emphasis
							on ish. there's tons of documentation out there! which is both awesome and sometimes
							frustrating....)
						</p>

						<p class="mb-0">a few things about me:</p>
						<ul class="list space-y-2 pl-4">
							<li>
								i was germinated in a <a href="https://en.wikipedia.org/wiki/Bogor" class="inline"
									>rainy city</a
								> in indonesia
							</li>
							<li>
								i enjoy playing sports and being outside. these days i mainly practice parkour, but
								i also enjoy doing aerials/circus, bouldering, rowing, swimming, and hiking
							</li>
							<li>
								i've been in fandom spaces for quite a long time. followed the gay migration from
								tumblr to twitter to discord to dreamwidth and now to the neocities-style <a
									href="https://thoughts.melonking.net/guides/introduction-to-the-web-revival-1-what-is-the-web-revival"
									>web revival</a
								>
							</li>
						</ul>
						<p>
							this site will probably always be under construction but is currently under MAJOR
							construction. a perpetual big dig, if you will.
						</p>
						<p class="mb-0">currently working on:</p>
						<ul class="list space-y-2 pl-4">
							<li>a tutorial on how i built this site</li>
							<li>
								some <a href="https://en.wikipedia.org/wiki/Template:Clade">clade</a> story/structure
							</li>
							<li>media gallery</li>
							<li>need to figure out if i can emulate a webring</li>
							<li>a blog of some kind? idk. will probably use <code>mdsvex</code> if i do</li>
						</ul>
					</div>
				</div>
			</details>
		</div>
	</div>
</section>

<style>
	.background {
		background-color: var(--color-accent-green);
		background-image: url('/assets/landing/noise.jpg');
		background-blend-mode: overlay; /* difference or overlay */
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.window {
		border-style: outset;
	}

	summary::-webkit-details-marker {
		display: none;
	}
	summary::marker {
		display: none;
	}

	.list li {
		position: relative;
		padding-left: 1em;
	}

	.list li::before {
		position: absolute;
		left: 0;
		content: '-';
	}
</style>
