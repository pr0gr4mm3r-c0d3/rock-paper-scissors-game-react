import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
	root: './',
	base: './',
	plugins: [react()],
	build: {
		outDir: './docs',
	},
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src'),
		},
	},
});
