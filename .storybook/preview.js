import './_drupal.js';

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
