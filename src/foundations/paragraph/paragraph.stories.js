import TwigParagraph from './paragraph.local.twig'

const sampleParagraph1 = `Freegan kombucha hella farm-to-table dreamcatcher. Humblebrag echo park prism DSA. Trust fund gatekeep 3 wolf moon, taiyaki raclette <a href="#">viral kickstarter literally</a>. Woke viral neutra four loko fit normcore, tote bag yr af typewriter celiac YOLO readymade tacos. Tote bag shoreditch fit helvetica raclette pour-over DIY organic truffaut roof party.`

const sampleParagraph2 = `Fam vinyl banjo, celiac pok pok everyday carry swag quinoa whatever truffaut offal YOLO venmo. Man bun edison bulb lomo bodega boys put a bird on it, cold-pressed brunch trust fund sus flexitarian artisan. Vape wolf VHS, mustache activated charcoal normcore scenester butcher meggings pork belly dreamcatcher.`

export default {
	title: 'Foundations/Paragraph',
	parameters: {
		componentSubtitle: 'HTML paragraph element',
	},
	argTypes: {
		paragraphs: {
			description: 'An array of sample paragraph text.',
		},
	},
	args: { paragraphs: [sampleParagraph1, sampleParagraph2] },
}

const Template = ({ paragraphs }) => TwigParagraph({ paragraphs })

export const Paragraph = Template.bind({})
