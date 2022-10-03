import TwigColors from './colors.local.twig'
import ColorsDocs from '!!raw-loader!./colors.docs.mdx'

export default {
	title: 'Utilities/Colors',
	parameters: {
		componentSubtitle: 'System-wide color variables',
		docs: {
			description: {
				component: ColorsDocs,
			},
		},
		controls: { disable: true },
	},
	argTypes: {
		colors: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		colors: [
			'color-primary-dark',
			'color-primary-regular',
			'color-primary-light',
			'color-primary-lightest',
		],
	},
}

const Template = ({ colors }) => TwigColors({ colors })

export const PrimaryColors = Template.bind({})

export const AccentColors = Template.bind({})
AccentColors.args = {
	colors: [
		'color-accent-regular',
		'color-accent-light',
		'color-accent-lightest',
		'color-accent-bright',
		'color-accent-bright-dark',
	],
}

export const NeutralColors = Template.bind({})
NeutralColors.args = {
	colors: [
		'color-neutral-darkest',
		'color-neutral-dark',
		'color-neutral-regular-dark',
		'color-neutral-regular',
		'color-neutral-regular-light',
		'color-neutral-light',
		'color-neutral-lightest',
		'color-neutral-white',
		'color-opacity-clear',
		'color-opacity-dark',
	],
}

export const StatusColors = Template.bind({})
StatusColors.args = {
	colors: [
		'color-status-error-dark',
		'color-status-error-regular',
		'color-status-error-light',
	],
}

export const FunctionalColors = Template.bind({})
FunctionalColors.args = {
	colors: [
		'color-functional-focus',
		'color-functional-focus-reverse',
		'color-functional-visited',
		'color-functional-text',
		'color-functional-disabled-background',
		'color-functional-disabled-text-on-background',
		'color-functional-disabled-text',
		'color-functional-disabled-input',
	],
}
