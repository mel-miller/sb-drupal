export default {
	title: 'Foundations/{{ titleCase foundationName }}',
	parameters: {},
}

export const Default = {
	render: () => `
    <div class="sb-{{ dashCase foundationName }}">
      Example content goes here.
    </div>
  `,
}
