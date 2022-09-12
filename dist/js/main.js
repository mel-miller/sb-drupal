import TwigButton from './button.twig';
import ButtonDocs from '!!raw-loader!./button.docs.mdx';

export default {
  title: 'Components/Button',
  parameters: {
    componentSubtitle: '',
    docs: {
      description: {
        component: ButtonDocs,
      },
    },
  },
  argTypes: {},
  args: {},
};

const Template = ({}) => TwigButton({});

export const Default = Template.bind({});
