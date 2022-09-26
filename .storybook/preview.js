import { addDecorator } from '@storybook/html'
import { useEffect } from '@storybook/client-api'
import './_drupal.js'
import '../public/css/main.css'

// Configure for use with Twig.
const Twig = require('twig')
const { addDrupalExtensions } = require('drupal-twig-extensions/twig')
addDrupalExtensions(Twig)

// Emulate Drupal behaviors.
// addDecorator deprecated, will eventually need a new solution for this.
addDecorator((Story) => {
	useEffect(() => Drupal.attachBehaviors(), [])
	return Story()
})

// Add additional viewports for our breakpoints.
const breakpointViewports = {
	small: {
		name: 'Small Breakpoint',
		styles: {
			width: '480px',
			height: '900px',
		},
	},
	medium: {
		name: 'Medium Breakpoint',
		styles: {
			width: '760px',
			height: '1200px',
		},
	},
	large: {
		name: 'Large Breakpoint',
		styles: {
			width: '1025px',
			height: '1200px',
		},
	},
	max: {
		name: 'Max Container Width',
		styles: {
			width: '1200px',
			height: '1200px',
		},
	},
}

export const parameters = {
	options: {
		storySort: {
			order: [
				'Documentation',
				'Foundations',
				'Utilities',
				'Components',
				'Recipes',
			],
		},
	},
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	viewport: {
		viewports: breakpointViewports,
	},
}
