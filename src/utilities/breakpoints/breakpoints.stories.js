import TwigBreakpoints from './breakpoints.twig';
import BreakpointsDocs from '!!raw-loader!./breakpoints.docs.mdx';

export default {
  title: 'Utilities/Breakpoints',
  parameters: {
    componentSubtitle: 'Standardized viewport width ranges',
    docs: {
      description: {
        component: BreakpointsDocs,
      },
    },
    controls: { disabled: true },
  },
};

const Template = ({}) => TwigBreakpoints({});

export const Breakpoints = Template.bind({});
