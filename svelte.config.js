import adapter from '@sveltejs/adapter-cloudflare';
import { mdsvex } from 'mdsvex';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'$bp': 'src/content/blog_posts',
			'$assets': 'src/lib/assets',
			'$components': 'src/lib/components',
			'$misc': 'src/content/misc'
		}
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md']
		})
	]
};

export default config;
