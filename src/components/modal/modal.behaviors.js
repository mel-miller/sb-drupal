Drupal.behaviors.Modal = {
	attach: function (context, settings) {
		const modals = document.querySelectorAll('.sb-modal')

		modals.forEach((modal) => {
			const modalId = modal.id
			const modalNum = modalId.substring(modalId.indexOf('modal--') + 7)
			const openBtn = document.getElementById(`modalOpen--${modalNum}`)
			const currentModal = document.getElementById(`modal--${modalNum}`)
			const closeBtn = currentModal.querySelector('.sb-modal__close-button')

			// Open modal via open button.
			openBtn.addEventListener('click', (e) => {
				e.preventDefault()
				currentModal.style.display = 'block'
				openBtn.disabled = true
			})

			// Close modal via close button.
			closeBtn.addEventListener('click', (e) => {
				e.preventDefault()
				currentModal.style.display = 'none'
				openBtn.disabled = false
			})

			// Close modal via "esc" key.
			window.addEventListener('keydown', function (event) {
				if (event.key === 'Escape') {
					currentModal.style.display = 'none'
					openBtn.disabled = false
				}
			})

			// Close modal by clicking outside of modal content area.
			window.onclick = function (e) {
				if (e.target == modal) {
					currentModal.style.display = 'none'
					openBtn.disabled = false
				}
			}
		})
	},
}
