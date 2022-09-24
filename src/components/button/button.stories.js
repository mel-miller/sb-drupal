import TwigButton from './button.twig';
import ButtonDocs from '!!raw-loader!./button.docs.mdx';

export default {
  title: 'Components/Button',
  parameters: {
    componentSubtitle: 'An interactive element used to initiate an action',
    docs: {
      description: {
        component: ButtonDocs,
      },
    },
  },
  argTypes: {
    text: {
      description: 'Button text',
    },
    variant: {
      description: 'Button variant',
      table: { defaultValue: { summary: 'primary' } },
      control: {
        type: 'radio',
        options: ['primary', 'secondary'],
      },
    },
    type: {
      description: 'Button type attribute',
      table: { defaultValue: { summary: 'button' } },
      control: {
        type: 'radio',
        options: ['button', 'submit', 'reset'],
      },
    },
    disabled: {
      description: 'Button is disabled',
      table: { defaultValue: { summary: 'false' } },
      control: {
        type: 'boolean',
      },
    },
  },
  args: { text: 'Button', variant: 'primary', type: 'button', disabled: false },
};

const Template = ({ text, variant, type, disabled }) => TwigButton({ text, variant, type, disabled });

export const Button = Template.bind({});
