export default {
	title: 'Foundations/{{ titleCase foundationName }}',
	parameters: {},
}

export const Default = {
	render: () => `
    <div class="sbd-{{ dashCase foundationName }}">
      Example content goes here.
    </div>
  `,
}
