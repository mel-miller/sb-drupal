import drupalAttribute from 'drupal-attribute'
import TwigTextarea from './textarea.local.twig'
import TextareaSource from '!!raw-loader!./textarea.twig'
import TextareaDocs from '!!raw-loader!./textarea.docs.mdx'

const background_color_options = ['light', 'dark', 'primary-lightest']

export default {
	title: 'Components/Form Elements/Textarea',
	parameters: {
		componentSubtitle: 'A multi-line plain-text editing control',
		componentSource: {
			code: TextareaSource,
			language: 'twig',
		},
		docs: {
			description: {
				component: TextareaDocs,
			},
		},
	},
	argTypes: {
		background_color: {
			description: 'Background color of form',
			table: { defaultValue: { summary: 'light' } },
			options: background_color_options,
			control: {
				type: 'radio',
			},
		},
		rows: {
			description: 'Number of visible text lines for the text control',
		},
		cols: {
			description: 'Visible width of the text control',
		},
		attributes: {
			table: {
				disable: true,
			},
		},
		wrapper_attributes: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		background_color: 'light',
		rows: 5,
		cols: 30,
		attributes: new drupalAttribute(),
		wrapper_attributes: new drupalAttribute(),
	},
}

const Template = ({
	background_color,
	rows,
	cols,
	attributes,
	wrapper_attributes,
}) => {
	return TwigTextarea({
		background_color,
		rows,
		cols,
		attributes,
		wrapper_attributes,
		background_color_options,
	})
}

export const TextareaLight = Template.bind({})

export const TextareaDark = Template.bind({})
TextareaDark.args = {
	background_color: 'dark',
}
TextareaDark.parameters = {
	backgrounds: { default: 'dark' },
}

export const TextareaPrimary = Template.bind({})
TextareaPrimary.args = {
	background_color: 'primary-lightest',
}
TextareaPrimary.parameters = {
	backgrounds: { default: 'primary-lightest' },
}
