import TwigAnchor from './anchor.local.twig'
import AnchorDocs from '!!raw-loader!./anchor.docs.mdx'

export default {
	title: 'Foundations/Anchor',
	parameters: {
		componentSubtitle: 'HTML anchor element',
		docs: {
			description: {
				component: AnchorDocs,
			},
		},
	},
	argTypes: {
		href: {
			description: 'Link href',
		},
		text: {
			description: 'Link text',
		},
	},
	args: { href: '#', text: 'this is an anchor link' },
}

const Template = ({ href, text }) => TwigAnchor({ href, text })

export const Anchor = Template.bind({})
