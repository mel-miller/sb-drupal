import markup from './{{ dashCase elementName }}.twig'
import data from './{{ dashCase elementName }}.yml'

export default {
	title: 'Elements/{{ titleCase elementName }}',
	render: (args) => markup(args),
	argTypes: {},
	args: {
		...data,
	},
}

export const Default = {}
