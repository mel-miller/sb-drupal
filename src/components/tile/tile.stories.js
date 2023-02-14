import TwigTile from './tile.twig'; 
import TileSource from '!!raw-loader!./tile.twig'
import TileDocs from '!!raw-loader!./tile.docs.mdx';

export default {
  title: 'Components/Tile',
  parameters: {
    componentSubtitle: '', 
    componentSource: {
			code: TileSource,
			language: 'twig',
		},
    docs: {
      description: {
        component: TileDocs,
      },
    },
  },
  argTypes: {},
  args: {},
};

const Template = ({}) => TwigTile({});

export const Tile = Template.bind({});
