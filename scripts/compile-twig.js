import chokidar from 'chokidar'
import { glob } from 'glob'
import path from 'path'
import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import process from 'process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

// Function to copy Twig files maintaining structure
async function copyTwigFiles() {
	try {
		const pattern = path.join(rootDir, 'src/**/*.twig')
		const twigFiles = await glob(pattern)

		if (twigFiles.length === 0) {
			console.log('No Twig files found')
			return
		}

		for (const file of twigFiles) {
			const relativePath = path.relative(rootDir, file)
			const destPath = relativePath.replace('src/', 'dist/')
			const destDir = path.dirname(destPath)

			await fs.mkdir(destDir, { recursive: true })
			await fs.copyFile(file, destPath)
		}

		console.log(`Copied ${twigFiles.length} Twig files`)
	} catch (error) {
		console.error('Error copying Twig files:', error)
	}
}

// Build once
await copyTwigFiles()

// Watch for changes (if needed)
if (process.argv.includes('--watch')) {
	console.log('Watching for Twig file changes...')
	const pattern = path.join(rootDir, 'src/**/*.twig')
	chokidar.watch(pattern).on('change', () => {
		copyTwigFiles()
	})
}
