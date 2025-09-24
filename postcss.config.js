import cssnano from 'cssnano'
import postcssCustomMedia from 'postcss-custom-media'
import postcssGlobalData from '@csstools/postcss-global-data'
import postcssImport from 'postcss-import'
import postcssInsert from 'postcss-insert'
import postcssNested from 'postcss-nested'

export default {
	plugins: [
		cssnano,
		postcssImport,
		postcssGlobalData({
			files: ['src/utilities/breakpoints/breakpoints.css'],
		}),
		postcssCustomMedia,
		postcssNested,
		postcssInsert,
	],
}
