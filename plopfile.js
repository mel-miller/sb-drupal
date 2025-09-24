const inputMinimumLength = async (input) => {
  if (input.length < 3) {
    return 'Name must be at least 3 characters.';
  }
  return true;
};

export default function (plop) {
  // generate foundation
  plop.setGenerator('foundation', {
    description: 'Foundation scaffolding',
    prompts: [
      {
        type: 'input',
        name: 'foundationName',
        message: 'Name of the new foundation',
        validate: inputMinimumLength,
        plop,
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/foundations/{{ dashCase foundationName }}/',
        base: '_generators/foundation',
        templateFiles: '_generators/foundation/*.*',
      },
      {
        type: 'append',
        path: 'src/foundations/index.css',
        template:
          "@import url('./{{ dashCase foundationName }}/{{ dashCase foundationName }}.css');",
      },
    ],
  });

  // generate element
  plop.setGenerator('element', {
    description: 'Element scaffolding',
    prompts: [
      {
        type: 'input',
        name: 'elementName',
        message: 'Name of the new element',
        validate: inputMinimumLength,
        plop,
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/elements/{{ dashCase elementName }}/',
        base: '_generators/element',
        templateFiles: '_generators/element/*.*',
      },
      {
        type: 'append',
        path: 'src/elements/index.css',
        template:
          "@import url('./{{ dashCase elementName }}/{{ dashCase elementName }}.css');",
      },
    ],
  });

  // generate component
  plop.setGenerator('component', {
    description: 'Component scaffolding',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Name of the new component',
        validate: inputMinimumLength,
        plop,
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/components/{{ dashCase componentName }}/',
        base: '_generators/component',
        templateFiles: '_generators/component/*.*',
      },
      {
        type: 'append',
        path: 'src/components/index.css',
        template:
          "@import url('./{{ dashCase componentName }}/{{ dashCase componentName }}.css');",
      },
    ],
  });

  // generate layout
  plop.setGenerator('layout', {
    description: 'Layout scaffolding',
    prompts: [
      {
        type: 'input',
        name: 'layoutName',
        message: 'Name of the new layout',
        validate: inputMinimumLength,
        plop,
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/layouts/{{ dashCase layoutName }}/',
        base: '_generators/layout',
        templateFiles: '_generators/layout/*.*',
      },
      {
        type: 'append',
        path: 'src/layouts/index.css',
        template:
          "@import url('./{{ dashCase layoutName }}/{{ dashCase layoutName }}.css');",
      },
    ],
  });

  // generate utility
  plop.setGenerator('utility', {
    description: 'Utility scaffolding',
    prompts: [
      {
        type: 'input',
        name: 'utilityName',
        message: 'Name of the new utility',
        validate: inputMinimumLength,
        plop,
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/utilities/{{ dashCase utilityName }}/',
        base: '_generators/utility',
        templateFiles: '_generators/utility/*.*',
      },
      {
        type: 'append',
        path: 'src/utilities/index.css',
        template:
          "@import url('./{{ dashCase utilityName }}/{{ dashCase utilityName }}.css');",
      },
    ],
  });
}
