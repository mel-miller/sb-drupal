export default {
	title: 'Utilities/{{ titleCase utilityName }}',
	parameters: {},
}

export const Default = {
	render: () => `
    <div class="sbd-{{ dashCase utilityName }}">
      Example content goes here.
    </div>
  `,
}
