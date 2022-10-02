import TwigHeadings from './headings.local.twig'

export default {
	title: 'Foundations/Headings',
	parameters: {
		componentSubtitle: 'HTML heading elements (h1-h6)',
	},
	argTypes: {
		heading_level: {
			name: 'Heading level',
			description: 'Semantic heading level (h1-h6)',
			control: {
				type: 'range',
				min: 1,
				max: 6,
				step: 1,
			},
		},
		text: {
			name: 'Heading text',
			description: 'Sample text for heading',
			control: {
				type: 'text',
			},
		},
	},
	args: { heading_level: 1, text: 'Sample heading text' },
}

const Template = ({ heading_level, text }) =>
	TwigHeadings({ heading_level, text })

export const Headings = Template.bind({})
