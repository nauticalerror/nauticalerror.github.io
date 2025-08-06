import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
	plugins: [yaml(), sveltekit()]
});
