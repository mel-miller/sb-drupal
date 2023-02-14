module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		{
			name: '@storybook/addon-essentials',
			options: {
				actions: false,
			},
		},
		'@storybook/addon-links',
		'@storybook/addon-a11y',
		'storybook-source-code-addon',
	],
	framework: '@storybook/html',
	staticDirs: ['../public'],
}
