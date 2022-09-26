import TwigContainer from './container.local.twig'
import ContainerDocs from '!!raw-loader!./container.docs.mdx'

export default {
	title: 'Utilities/Container',
	parameters: {
		componentSubtitle: 'A consistent wrapper element',
		docs: {
			description: {
				component: ContainerDocs,
			},
		},
		controls: { disabled: true },
	},
	argTypes: {},
	args: {},
}

const Template = ({}) => TwigContainer({})

export const Container = Template.bind({})
