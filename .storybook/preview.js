import { addDecorator } from '@storybook/html';
import { useEffect } from '@storybook/client-api';
import './_drupal.js';

// Configure for use with Twig.
const Twig = require('twig');
const { addDrupalExtensions } = require('drupal-twig-extensions/twig');
addDrupalExtensions(Twig);

// Emulate Drupal behaviors.
// addDecorator deprecated, will eventually need a new solution for this.
addDecorator((Story) => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return Story();
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
