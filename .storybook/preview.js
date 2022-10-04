import { addDecorator } from '@storybook/html'
import { useEffect } from '@storybook/client-api'
import './_drupal.js'
import '../public/css/sb-main.css'
import '../public/css/storybook.local.css'

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
				['Introduction', 'Installation', 'Theme Setup', 'Theme Usage', '*'],
				'Foundations',
				'Utilities',
				'Components',
				['Icon', 'Button', 'Link', 'Card', 'Tabs', '*'],
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
	backgrounds: {
		default: 'white',
		values: [
			{
				name: 'white',
				value: 'var(--color-neutral-white)',
			},
			{
				name: 'light',
				value: 'var(--color-neutral-lightest)',
			},
			{
				name: 'primary-lightest',
				value: 'var(--color-primary-lightest)',
			},
			{
				name: 'accent-lightest',
				value: 'var(--color-accent-lightest)',
			},
			{
				name: 'dark',
				value: 'var(--color-neutral-darkest)',
			},
			{
				name: 'primary-dark',
				value: 'var(--color-primary-dark)',
			},
		],
	},
	viewport: {
		viewports: breakpointViewports,
	},
}
