import TwigCard from './card.twig'
import CardSource from '!!raw-loader!./card.twig'
import CardDocs from '!!raw-loader!./card.docs.mdx'

export default {
	title: 'Components/Card',
	parameters: {
		componentSubtitle:
			'A container to group related information, often used as a teaser',
		componentSource: {
			code: CardSource,
			language: 'twig',
		},
		docs: {
			description: {
				component: CardDocs,
			},
		},
	},
	argTypes: {
		element_type: {
			description: 'Base HTML element for card — `div`, `article`, or `aside`.',
			table: { defaultValue: { summary: 'div' } },
			options: ['div', 'article', 'aside'],
			control: {
				type: 'select',
			},
		},
		image: {
			description: 'Card image.',
		},
		kicker_text: {
			description: 'Kicker. Can also be used as a category or date field.',
		},
		heading_text: {
			description: 'Card heading.',
		},
		heading_level: {
			description: 'HTML element for heading text — `h2` or `h3`',
			table: { defaultValue: { summary: 'h2' } },
			options: ['h2', 'h3'],
			control: {
				type: 'select',
			},
		},
		body_text: {
			description: 'Short description or summary.',
		},
		link: {
			description: 'Card CTA.',
		},
		extra_classes: {
			description:
				'Used to add extra classes to the parent `card` element. Useful when building a grid of cards.',
		},
	},
	args: {
		element_type: 'div',
		image: {
			src: 'demo-images/placeimg_360_240_nature.jpeg',
			alt: 'Beach at sunset.',
		},
		kicker_text: 'Category Name',
		heading_text: 'This is the card heading',
		heading_level: 'h2',
		body_text:
			'Body text of content, or content summary. Helvetica kombucha shabby chic, mustache put a bird on it. Green juice twee iceland cardigan retro art party lomo intelligentsia.',
		link: { text: 'Read More', url: '#' },
		extra_classes: '',
	},
}

const Template = ({
	element_type,
	image,
	kicker_text,
	heading_text,
	heading_level,
	body_text,
	link,
	extra_classes,
}) =>
	TwigCard({
		element_type,
		image,
		kicker_text,
		heading_text,
		heading_level,
		body_text,
		link,
		extra_classes,
	})

export const DefaultCard = Template.bind({})

export const CardWithoutImage = Template.bind({})
CardWithoutImage.args = {
	image: '',
}
