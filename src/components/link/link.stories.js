import TwigLink from './link.twig'
import LinkSource from '!!raw-loader!./link.twig'
import LinkDocs from '!!raw-loader!./link.docs.mdx'

export default {
	title: 'Components/Link',
	parameters: {
		componentSubtitle:
			'An interactive element used to navigate to another location',
		componentSource: {
			code: LinkSource,
			language: 'twig',
		},
		docs: {
			description: {
				component: LinkDocs,
			},
		},
	},
	argTypes: {
		variant: {
			description: 'Link variant',
			table: { defaultValue: { summary: 'primary' } },
			options: ['primary', 'secondary', 'reverse'],
			control: {
				type: 'radio',
			},
		},
		href: {
			description: 'Link href',
		},
		text: {
			description: 'Link text',
		},
	},
	args: { variant: 'primary', href: '#', text: 'This is a link' },
}

const Template = ({ variant, href, text }) => TwigLink({ variant, href, text })

export const LinkPrimary = Template.bind({})

export const LinkSecondary = Template.bind({})
LinkSecondary.args = {
	variant: 'secondary',
}

export const LinkReverse = Template.bind({})
LinkReverse.args = {
	variant: 'reverse',
}
LinkReverse.parameters = {
	backgrounds: { default: 'dark' },
	docs: {
		storyDescription: 'To be used on a dark-colored background.',
	},
}
