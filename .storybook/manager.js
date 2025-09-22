import { addons } from 'storybook/manager-api'
import themeSbDrupal from './themeSbDrupal'

addons.setConfig({
	theme: themeSbDrupal,
})
