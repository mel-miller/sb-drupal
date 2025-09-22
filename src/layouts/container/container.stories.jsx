import markup from './container.twig'
import data from './container.yml'

export default {
	title: 'Layouts/Container',
	parameters: {
		layout: 'fullscreen',
	},
	render: (args) => markup(args),
	argTypes: {},
	args: {
		...data,
	},
}

export const Default = {}
