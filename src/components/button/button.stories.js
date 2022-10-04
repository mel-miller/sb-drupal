import TwigButton from './button.twig'
import ButtonSource from '!!raw-loader!./button.twig'
import ButtonDocs from '!!raw-loader!./button.docs.mdx'

export default {
	title: 'Components/Button',
	parameters: {
		componentSubtitle: 'An interactive element used to initiate an action',
		componentSource: {
			code: ButtonSource,
			language: 'twig',
		},
		docs: {
			description: {
				component: ButtonDocs,
			},
		},
	},
	argTypes: {
		text: {
			description: 'Button text',
		},
		variant: {
			description: 'Button variant',
			table: { defaultValue: { summary: 'primary' } },
			options: ['primary', 'secondary', 'reverse'],
			control: {
				type: 'radio',
			},
		},
		type: {
			description: 'Button type attribute',
			table: { defaultValue: { summary: 'button' } },
			options: ['button', 'submit', 'reset'],
			control: {
				type: 'radio',
			},
		},
		disabled: {
			description: 'Button is disabled',
			table: { defaultValue: { summary: 'false' } },
			control: {
				type: 'boolean',
			},
		},
	},
	args: { text: 'Button', variant: 'primary', type: 'button', disabled: false },
}

const Template = ({ text, variant, type, disabled }) =>
	TwigButton({ text, variant, type, disabled })

export const ButtonDefault = Template.bind({})

export const ButtonSecondary = Template.bind({})
ButtonSecondary.args = {
	variant: 'secondary',
}

export const ButtonReverse = Template.bind({})
ButtonReverse.args = {
	variant: 'reverse',
}
ButtonReverse.parameters = {
	backgrounds: { default: 'dark' },
	docs: {
		storyDescription: 'To be used on a dark-colored background.',
	},
}
