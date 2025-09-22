export default {
	title: 'Utilities/{{ titleCase utilityName }}',
	parameters: {},
}

export const Default = {
	render: () => `
    <div class="sb-{{ dashCase utilityName }}">
      Example content goes here.
    </div>
  `,
}
