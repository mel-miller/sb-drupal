import TwigModal from './modal.twig'
import ModalSource from '!!raw-loader!./modal.twig'
import ModalDocs from '!!raw-loader!./modal.docs.mdx'

import './modal.behaviors.js'

export default {
	title: 'Components/Modal',
	parameters: {
		componentSubtitle: '',
		componentSource: {
			code: ModalSource,
			language: 'twig',
		},
		docs: {
			description: {
				component: ModalDocs,
			},
		},
	},
	argTypes: {
		modal_id: {
			type: 'string',
			description:
				'ID string — if not provided, one will be randomly generated.',
		},
		button_text: {
			description: 'Text for open button',
		},
		button_classes: {
			description: 'CSS classes for open button',
			table: { defaultValue: { summary: 'sb-button' } },
		},
		content: {
			description: 'Example modal content',
		},
	},
	args: {
		modal_id: '123',
		button_text: 'Open Modal',
		button_classes: 'sb-button',
		content:
			'Sample content for modal. Skateboard ramps kogi sriracha, jianbing before they sold out celiac seitan ethical squid hammock cronut. Artisan small batch same paleo tote bag, woke poutine roof party put a bird on it gluten-free.',
	},
}

const Template = ({ modal_id, button_text, button_classes, content }) =>
	TwigModal({ modal_id, button_text, button_classes, content })

export const Modal = Template.bind({})
