import { defineConfig } from 'vite'
import yml from '@modyfi/vite-plugin-yaml'
import twig from 'vite-plugin-twig-drupal'
import { join } from 'node:path'
import path from 'path'
import { glob } from 'glob'
import eslint from 'vite-plugin-eslint'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

export default defineConfig({
	root: 'src',
	publicDir: 'public',
	plugins: [
		twig({
			namespaces: {
				foundations: join(__dirname, './src/foundations'),
				elements: join(__dirname, './src/elements'),
				components: join(__dirname, './src/components'),
				layouts: join(__dirname, './src/layouts'),
				utilities: join(__dirname, './src/utilities'),
			},
		}),
		yml(),
		eslint(),
	],
	build: {
		emptyOutDir: true,
		outDir: 'dist',
		rollupOptions: {
			input: glob.sync(path.resolve(__dirname, './src/**/*.{css,js}')),
			output: {
				assetFileNames: 'css/[name].css',
				entryFileNames: 'js/[name].js',
			},
		},
	},
	css: {
		devSourcemap: true,
	},
})
