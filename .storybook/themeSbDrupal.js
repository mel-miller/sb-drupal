import { create } from '@storybook/theming'
import { version } from '../package.json'

const toolkitTitle = `<img src="sb-drupal-logo.svg" width="150px" alt="Storybook Drupal"/> <div style=" padding-left:0.375rem; font-size: 1rem;">v${version}</div>`

export default create({
	base: 'light',
	brandTitle: toolkitTitle,
	colorPrimary: '#FF4785',
	colorSecondary: '#0489c8',
	textColor: 'black',
	textInverseColor: 'white',
	appBg: '#f6f7f7',
	appContentBg: 'white',
	barTextColor: '#3d4546',
	barSelectedColor: '#0489c8',
})
