import markup from './{{ dashCase layoutName }}.twig'
import data from './{{ dashCase layoutName }}.yml'

export default {
	title: 'Layouts/{{ titleCase layoutName }}',
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
