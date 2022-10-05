import { create } from '@storybook/theming'
import { version } from '../package.json'

const toolkitTitle = `<img src="sb-drupal-logo.svg" width="150px" alt="Storybook Drupal"/> <br/> v${version}`

export default create({
	base: 'light',
	brandTitle: toolkitTitle,
	colorPrimary: '#FF4785',
	colorSecondary: '#0678be',
	textColor: 'black',
	textInverseColor: 'white',
	barTextColor: '#3d4546',
	barSelectedColor: '#0678be',
})
