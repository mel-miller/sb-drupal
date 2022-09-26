import TwigGrid from './grid.local.twig';
import GridDocs from '!!raw-loader!./grid.docs.mdx';

export default {
  title: 'Utilities/Grid',
  parameters: {
    componentSubtitle:
      'A fluid grid that is based on 4-columns at the small breakpoint and 12-columns at medium and above',
    docs: {
      description: {
        component: GridDocs,
      },
    },
  },
  argTypes: {
    items: {
      name: 'Grid Items',
      description:
        'Sample grid items for prototyping. Edit, add, or remove items within the array to see various combinations. <br/> <br/> The `sm`, `md`, and `lg`  properties indicate how many columns an item should span at each viewport size.',
    },
  },
  args: {
    items: [
      { sm: 4, md: 4, lg: 3 },
      { sm: 4, md: 4, lg: 6 },
      { sm: 4, md: 4, lg: 3 },
    ],
  },
};

const Template = ({ items }) => TwigGrid({ items });

export const Grid = Template.bind({});
