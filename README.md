# sb-drupal

A Storybook implementation for Drupal.

This toolkit provides assets for use within a Drupal 9 theme, and a Storybook instance to preview the components.

[Published Storybook](https://mel-miller.github.io/sb-drupal)

The following instructions are for contributors to this repository. Drupal integration and usage instructions can be found within the published Storybook.

## Local Development Setup

**Prerequisites:** Node 16 and npm

1. `npm install` — Installs dependencies
2. `npm run develop` — Compiles styles, watches for changes, and starts the Storybook development server.

## Project Structure

Notable directories and files unique to this project.

### /src/components

Each component will have its own named directory here. All files specific to the component (twig, scss, js) and its stories file should be included in the directory.

When creating a new component, be sure to forward its styles from `src/components/_index.scss` like so:

```
@forward './button/button';
```

### /src/docs

Any doc pages that do not belong to a specific component.

### /src/foundations

Includes stylesheets and components for native HTML elements. Any components built in this section are for example purposes only and will not have shipped Twig files.

When creating a new foundational stylesheet, be sure to forward its styles from `src/foundations/_index.scss` like so:

```
// Stylesheet-only items.
@forward './variables';

// Foundational components.
@forward './anchor/anchor';
```

### /src/recipes

Includes stories that illustrate how patterns can be built within your Drupal theme using this toolkit. Each will have a story with instructions and examples. Recipes should not contain their own styles or shipped Twig files.

### /src/utilities

Includes utility components such as breakpoints, grid, spacing, etc. Some will provide utility classes and/or mixins. Each will have a story with instructions and usage guidelines.

When creating a new utility, be sure to forward its styles from `src/utilities/_index.scss` like so:

```
@forward './grid/grid';
@forward './breakpoints/breakpoints';
```

### /dist

Contains assets for the Composer package. Includes the following asset types:

- compiled css
- compiled js
- component twig files

### /public

Static files for the Storybook instance. Also, contains a copy of the compiled `sb-main.css`.

### gulpfile.js

Contains tasks used to compile styles and prepare assets for the Composer package.

### .gitattributes

Primarily used to exclude files and directories from being included in the Composer package.

### composer.json

Required for consumption of this package by Drupal via Composer.

## Contributing

Never commit directly to `main` branch. All contributions should be added via pull requests.

### Adding a New Component

Create a new `component-name` directory within `/src/components`. At minimum each component should include the following:

- `component-name.stories.js` — To generate the component's stories for Storybook.
- `component-name.twig` — The component's markup.

Also, most components will include its own stylesheet in the form of a Sass partial in scss format.

- `_component-name.scss`

If your component does have a stylesheet, make sure to forward it from `src/components/_index.scss` like so:

```
@forward './component-name/component-name';
```

Finally, if a component requires JavaScript to function, a js file should also be included. NOTE: This file will also need to be imported into the `component-name.stories.js` file.

- `component-name.behaviors.js`

#### Utilities, Foundations, and Recipes

If a component is in one of these sections, it should have a "local" Twig file — meaning that it will not get included into the composer package.

- `component-name.local.twig` — The component's markup.

#### Component generator

A [customized component generator](https://www.npmjs.com/package/generator-sb-drupal) is included in this project. Instructions for use are included in the generator's README document.

### Update the Changelog

Add any changes that will affect the consumer of the toolkit to the `Unreleased` section of `CHANGELOG.md`.

## Coding Standards

### Accessibility

All components should be written with accessibility in mind at the core. Here are some good resources to get started:

- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)
- [A11Y Style Guide](https://a11y-style-guide.com/style-guide/)

### Twig

Drupal 9 uses Twig 2.

Resources:

- [Official Twig Documentation](https://twig.symfony.com/doc/2.x/)
- [Twig in Drupal](https://www.drupal.org/docs/theming-drupal/twig-in-drupal)

### Use BEM for CSS classes

BEM (Block. Element. Modifier) is a CSS naming and organization methodology which will help us standardize our class names and prevent unintended style bleed between components.

[BEM Methodology](https://en.bem.info/methodology/quick-start/)

### Drupal Behaviors

Wrap all component-specific js in a behavior like so:

```
Drupal.behaviors.behaviorName = {
	attach(context) {

	},
};
```

### Drupal Attributes

If a template you write uses Drupal-specific attribute-related functions (such as addClass, setAttribute, etc...), you will need to mock them in that component's stories file.

Import this package to the top of your stories file:

```
import drupalAttribute from "drupal-attribute";

```

Then pass the name of the attributes object as a story arg, and set the value to a new instance of the `drupalAttribute` class like so:

```
args: {
   attributes: new drupalAttribute(),
},

```

In the example above, as with most Drupal templates, the name of the object is "attributes".

It is also a good idea to hide the control for that arg like so:

```
argTypes: {
   attributes: {
      table: {
         disable: true,
      },
   },
},
```
