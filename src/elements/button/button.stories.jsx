import markup from './button.twig'
import data from './button.yml'

export default {
	title: 'Elements/Button',
	tags: ['autodocs'],
	render: (args) => markup(args),
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
		},
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'critical'],
		},
		type: {
			control: { type: 'select' },
			options: ['button', 'submit', 'reset'],
		},
	},
	args: {
		...data,
	},
}

export const Default = {}
