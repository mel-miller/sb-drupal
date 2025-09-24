/** @type { import('@storybook/html-vite').Preview } */
import Twig from 'twig'
import twigDrupal from 'twig-drupal-filters'

import { customBackgrounds } from './backgrounds'
import { customViewports } from './viewports'

import '../src/sb-global.css'

function setupTwig(twig) {
	twig.cache()
	twigDrupal(twig)
	return twig
}

setupTwig(Twig)

const preview = {
	parameters: {
		options: {
			storySort: {
				order: [
					'Documentation',
					['Overview', '*'],
					'Foundations',
					'Utilities',
					'Elements',
					'Components',
					'Layouts',
					'*',
				],
				includeName: true,
			},
		},
		backgrounds: { options: customBackgrounds },
		viewport: { viewports: customViewports },
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}

export default preview
