import markup from './card.twig'
import data from './card.yml'

export default {
	title: 'Components/Card',
	render: (args) => markup(args),
	argTypes: {},
	args: {
		...data,
	},
}

export const Default = {}
