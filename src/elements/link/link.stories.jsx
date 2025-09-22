import markup from './link.twig'
import data from './link.yml'

export default {
	title: 'Elements/Link',
	tags: ['autodocs'],
	render: (args) => markup(args),
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'reverse'],
		},
	},
	args: {
		...data,
	},
}

export const Default = {}
