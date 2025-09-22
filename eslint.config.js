// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import globals from 'globals';
import standard from '@eslint/js';

export default [
	{
		ignores: ['dist', 'node_modules', 'storybook'],
	},
	{
		languageOptions: {
			ecmaVersion: 2023,
			sourceType: 'module',
		},
	},
	{
		languageOptions: { globals: globals.browser },
	},
	{
		rules: {
			curly: 'error',
		},
	},
	{
		linterOptions: {
			reportUnusedDisableDirectives: 'off',
		},
	},
	standard.configs.recommended,
	...storybook.configs['flat/recommended'],
];
