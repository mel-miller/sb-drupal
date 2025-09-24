# sb-drupal

A Storybook implementation for Drupal.

This toolkit provides assets for use within a Drupal theme, and a Storybook instance to preview the components.

[Published Storybook](https://mel-miller.github.io/sb-drupal)

The following instructions are for contributors to this repository. Drupal integration and usage instructions can be found within the published Storybook.

## Local Development Setup

**Prerequisites:** Node 22 and npm

1. `npm install` — Installs dependencies
2. `npm run develop` — Compiles styles, watches for changes, and starts the Storybook development server.

## Project Structure

Notable directories and files unique to this project.

### /src/foundations

Includes stylesheets and components for native HTML elements or other global styles.

To create a new foundation run `npm run generate:foundation` from the root of the project.

### /src/utilities

Includes utility components such as breakpoints, grid, spacing, etc.

To create a new utility run `npm run generate:utility` from the root of the project.

### /src/elements

Includes stylesheets and components for reusable UI elements. Atomic-level components such as buttons, form elements, icons, etc.

To create a new element run `npm run generate:element` from the root of the project.

### /src/components

Includes stylesheets and components for more complex UI components such as cards, modals, navigation, etc.

To create a new component run `npm run generate:component` from the root of the project.

### /src/layouts

Includes stylesheets and components for layout-level components such as containers and page templates.

To create a new layout run `npm run generate:layout` from the root of the project.

### /src/design-tokens

This project includes a light-weight design tokens system using JSON files. Tokens are compiled to CSS custom properties and included in the final CSS output.

### /src/docs

Any doc pages that do not belong to a specific component.

### /dist

Contains assets for the NPM package. Includes the following asset types:

- compiled css
<!-- - compiled js -->
- component twig files

### /public

Static files for the Storybook instance.

## Contributing

Never commit directly to `main` branch. All contributions should be added via pull requests.

### Update the Changelog

Add any changes that will affect the consumer of the toolkit to the `Unreleased` section of `CHANGELOG.md`.

## Coding Standards

### Accessibility

All components should be written with accessibility in mind at the core. Here are some good resources to get started:

- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)
- [A11Y Style Guide](https://a11y-style-guide.com/style-guide/)

### Twig

Resources for writing Twig templates:

- [Official Twig Documentation](https://twig.symfony.com/doc/2.x/)
- [Twig in Drupal](https://www.drupal.org/docs/theming-drupal/twig-in-drupal)

### Use BEM for CSS classes

BEM (Block. Element. Modifier) is a CSS naming and organization methodology which will help us standardize our class names and prevent unintended style bleed between components.

[BEM Methodology](https://en.bem.info/methodology/quick-start/)

<!-- ### Drupal Behaviors

Wrap all component-specific js in a behavior like so:

```
Drupal.behaviors.behaviorName = {
	attach(context, settings) {

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
``` -->

## Future updates

- Add Drupal behaviors support for components.
- Add support for Drupal attributes in twig templates.
- Add additional components of each type (element, component, layout, utility).
- Add automated VRT and a11y testing.
- Add NPM package publishing workflow.
- Shift build process to GitHub Actions.
- Namespaced Twig files and instructions for importing into Drupal themes.
- Add implementation instructions for Drupal themes.
