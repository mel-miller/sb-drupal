import TwigTabs from './tabs.twig'
import TabsSource from '!!raw-loader!./tabs.twig'
import TabsDocs from '!!raw-loader!./tabs.docs.mdx'

import './tabs.behaviors.js'

export default {
	title: 'Components/Tabs',
	parameters: {
		componentSubtitle:
			'A component used to navigate between related sections of content',
		componentSource: {
			code: TabsSource,
			language: 'twig',
		},
		docs: {
			description: {
				component: TabsDocs,
			},
		},
	},
	argTypes: {
		ariaLabel: {
			description: 'Will be used as the `aria-label` for the tabs.',
		},
		tabs: {
			description:
				'Add, delete, or edit items in this array. Each item in the array corresponds to a tab/panel pair, and is an object that takes five possible options: <br/> - `tabLabel` (string) <br/> - `tabUid` (string, optional — if not provided, one will be randomly generated.) <br/> - `panelContent` (string or markup) <br/>- `icon` (string, from list on Icon component page) <br/> - `disabled` (optional, boolean)',
		},
	},
	args: { ariaLabel: 'Demo tabs' },
}

const Template = ({ ariaLabel, tabs }) => TwigTabs({ ariaLabel, tabs })

export const Tabs = Template.bind({})
