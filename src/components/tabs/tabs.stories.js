import TwigTabs from './tabs.twig';
import TabsDocs from '!!raw-loader!./tabs.docs.mdx';

import './tabs.behaviors.js';

export default {
  title: 'Components/Tabs',
  parameters: {
    componentSubtitle: '',
    docs: {
      description: {
        component: TabsDocs,
      },
    },
  },
  argTypes: {},
  args: {},
};

const Template = ({}) => TwigTabs({});

export const Default = Template.bind({});
