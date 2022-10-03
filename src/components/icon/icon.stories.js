import TwigIcon from './icon.twig'
import IconSource from '!!raw-loader!./icon.twig'
import IconDocs from '!!raw-loader!./icon.docs.mdx'

export default {
	title: 'Components/Icon',
	parameters: {
		componentSubtitle: 'An element used to display an icon',
		componentSource: {
			code: IconSource,
			language: 'twig',
		},
		docs: {
			description: {
				component: IconDocs,
			},
		},
	},
	argTypes: {
		iconName: {
			description: 'Name of the icon to render',
			control: 'select',
			options: [
				'brands-twitter',
				'brands-facebook',
				'brands-linkedin',
				'brands-instagram',
				'brands-youtube',
				'action-add',
				'action-share',
				'arrow-down',
				'arrow-up',
				'arrow-left',
				'arrow-right',
				'symbol-checkmark',
				'symbol-checkmark-circle',
				'symbol-info',
				'symbol-info-error',
				'symbol-minus',
				'symbol-plus',
				'symbol-search',
				'symbol-stack-menu',
				'symbol-x-mark',
			],
		},
		size: {
			description: 'Size of the icon',
			table: { defaultValue: { summary: 'medium' } },
			control: {
				type: 'select',
				options: ['small', 'medium', 'large', 'x-large'],
			},
		},
	},
	args: {
		iconName: 'brands-twitter',
		size: 'medium',
	},
}

const Template = ({ iconName, size, cssClass }) =>
	TwigIcon({ iconName, size, cssClass })

export const Icon = Template.bind({})
