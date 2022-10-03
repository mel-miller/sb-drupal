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
	args: {
		ariaLabel: 'Demo tabs',
		tabs: [
			{
				tabLabel: 'Tab 1',
				tabUid: '001',
				panelContent: `<p>Demo content for Tab 1.</p><p>Panels can contain complex markup and other components.</p><p>Nunc ut dolor non massa venenatis rhoncus et nec quam. Donec sapien ex, lobortis sit amet feugiat in, tempor et elit. Mauris consequat lacus nec sem tincidunt consequat. Sed sit amet lobortis est. Etiam quis venenatis odio. Pellentesque non molestie turpis. Fusce eu ex magna.</p>`,
			},
			{
				tabLabel: 'Tab 2',
				tabUid: '002',
				panelContent: `<p>Demo content for tab 2.</p><p>Cras ex nunc, tincidunt ac auctor ac, elementum vitae ligula.Donec interdum velit in metus hendrerit condimentum.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris aliquam augue vel dapibus hendrerit.</p>`,
			},
			{
				tabLabel: 'Tab 3',
				tabUid: '003',
				panelContent: `<p>Demo content for tab 3.</p><p>Sed ac vestibulum risus, vitae pellentesque justo.Cras malesuada lacus augue, ac pharetra lectus auctor ut.Aenean imperdiet justo non erat blandit pretium.Vestibulum sagittis odio vel ipsum finibus, id tincidunt diam aliquet.Demo content for tab 3. Sed tempor velit magna, sit amet egestas purus hendrerit et.</p>`,
			},
			{
				tabLabel: 'Tab 4',
				tabUid: '004',
				panelContent: `<p>Demo content for tab 4.</p><p>Nullam dui diam, varius et enim vel, convallis molestie magna. Tempor odio sit amet odio vehicula, eu suscipit felis aliquam. Nullam nulla erat, ullamcorper vulputate scelerisque id, tempor at arcu. Morbi viverra libero sed sodales iaculis.</p>`,
			},
			{
				tabLabel: 'Tab 5',
				tabUid: '005',
				panelContent: `<p>Demo content for tab 5.</p><p>Aenean eros felis, imperdiet sagittis suscipit ut, sagittis ut turpis. Sed ac vestibulum risus, vitae pellentesque justo. Cras malesuada lacus augue, ac pharetra lectus auctor ut. Aenean imperdiet justo non erat blandit pretium. Vestibulum sagittis odio vel ipsum finibus, id tincidunt diam aliquet.</p>`,
			},
		],
	},
}

const Template = ({ ariaLabel, tabs }) => TwigTabs({ ariaLabel, tabs })

export const Tabs = Template.bind({})
