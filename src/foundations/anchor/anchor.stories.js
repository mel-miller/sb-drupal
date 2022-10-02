import TwigAnchor from './anchor.local.twig'

export default {
	title: 'Foundations/Anchor',
	parameters: {
		componentSubtitle: 'HTML anchor element',
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
