import TwigCardGrid from './card-grid.local.twig'
import CardGridDocs from '!!raw-loader!./card-grid.docs.mdx'

export default {
	title: 'Recipes/Card Grid',
	parameters: {
		componentSubtitle: 'An example of how to implement a grid of cards',
		docs: {
			description: {
				component: CardGridDocs,
			},
		},
	},
	argTypes: {},
	args: {
		cards: [
			{
				image: {
					src: 'demo-images/placeimg_360_240_arch.jpeg',
					alt: 'Image of urban street.',
				},
				kicker_text: 'Architecture',
				heading_text: 'An article about urban history',
				heading_level: 'h2',
				body_text:
					'Woke bespoke neutra scenester. Fashion axe slow-carb twee, man bun tonx kinfolk pabst lyft. Snackwave brunch flannel street art, mlkshk ramps stumptown poutine lomo.',
				link: { text: 'Read More', url: '#' },
			},
			{
				image: {
					src: 'demo-images/placeimg_360_240_nature.jpeg',
					alt: 'Image of nature.',
				},
				kicker_text: 'Science',
				heading_text: 'Article about nature stuff',
				heading_level: 'h2',
				body_text:
					'Unicorn mlkshk blog pop-up wayfarers butcher twee tousled vape sustainable jean shorts adaptogen street art. Austin yuccie tofu tumeric knausgaard pug.',
				link: { text: 'Read More', url: '#' },
			},
			{
				image: {
					src: 'demo-images/placeimg_360_240_tech.jpeg',
					alt: 'Image of technology.',
				},
				kicker_text: 'Technology',
				heading_text: 'Technology feature story ',
				heading_level: 'h2',
				body_text:
					'Wayfarers fanny pack try-hard four loko chartreuse. Hella viral hot chicken bodega boys. Cornhole tumeric salvia, cold-pressed fam godard fashion axe post-ironic man braid live-edge polaroid scenester bodega boys. ',
				link: { text: 'Read More', url: '#' },
			},
		],
	},
}

const Template = ({ cards }) => TwigCardGrid({ cards })

export const CardGrid = Template.bind({})
