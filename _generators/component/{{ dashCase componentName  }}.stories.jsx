import markup from './{{ dashCase componentName }}.twig'
import data from './{{ dashCase componentName }}.yml'

export default {
	title: 'Components/{{ titleCase componentName }}',
	render: (args) => markup(args),
	argTypes: {},
	args: {
		...data,
	},
}

export const Default = {}
