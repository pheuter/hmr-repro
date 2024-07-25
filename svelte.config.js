import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	vitePlugin: {
		inspector: {
			toggleKeyCombo: 'control-i',
			showToggleButton: 'never',
			toggleButtonPos: 'bottom-right'
		}
	},
	compilerOptions: {
		hmr: true
	}
};

export default config;
