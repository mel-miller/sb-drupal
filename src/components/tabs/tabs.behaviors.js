Drupal.behaviors.Tabs = {
	attach: function (context, settings) {
		const tabsClass = 'sb-tabs'

		const keys = {
			left: 'ArrowLeft',
			right: 'ArrowRight',
			home: 'Home',
			end: 'End',
		}

		let tabsets = document.querySelectorAll(`.${tabsClass}`)
		tabsets = Array.prototype.slice.call(tabsets)

		let tabs, triggers, actionElements

		tabsets.forEach((tabset) => {
			// locate all tab elements visible in larger viewports
			tabs = tabset.querySelectorAll(`.${tabsClass}__tab`)
			tabs = Array.prototype.slice.call(tabs)

			// locate all trigger/tab elements visible in smaller viewports
			triggers = tabset.querySelectorAll(`.${tabsClass}__trigger`)
			triggers = Array.prototype.slice.call(triggers)

			// combine all tab/trigger elements
			actionElements = [].concat(tabs, triggers)

			// locate all panel elements that contain content
			let panels = tabset.querySelectorAll(`.${tabsClass}__panel`)
			panels = Array.prototype.slice.call(panels)

			// iterate over all action elements (tabs/triggers)
			actionElements.forEach((tab) => {
				// add listener for keyboard navigation
				tab.addEventListener('keydown', handleKeys)

				// add listener for click navigation (mouse/touch)
				tab.addEventListener('click', (event) => {
					const { currentTarget: currentTab } = event

					// add appropriate attributes to the active element
					enableTab(currentTab)

					// locate current panel
					const currentPanelId = currentTab.getAttribute('aria-controls')
					const currentPanel = document.querySelector(`#${currentPanelId}`)
					// locate all other panels
					const otherPanels = panels.filter(
						(element) => element !== currentPanel
					)

					// toggle current and other panels appropriately
					currentPanel.removeAttribute('hidden')
					otherPanels.forEach((otherPanel) => {
						otherPanel.setAttribute('hidden', 'hidden')
					})
				})
			})
		})

		// Enables a tab/trigger and its partner trigger/tab element
		function enableTab(currentTab) {
			// locate the current index of the element in the array
			let currentElementIndex
			if (isTab(currentTab)) {
				currentElementIndex = tabs.indexOf(currentTab)
			} else if (isTrigger(currentTab)) {
				currentElementIndex = triggers.indexOf(currentTab)
			}

			// locate the current tab & trigger in the respective arrays
			const currentTabElem = tabs[currentElementIndex]
			const currentTriggerElem = triggers[currentElementIndex]

			// locate all other tabs & triggers in the respective arrays
			const otherTabs = tabs.filter(
				(element, index) => index !== currentElementIndex
			)
			const otherTriggers = triggers.filter(
				(element, index) => index !== currentElementIndex
			)

			// toggle the current tab & trigger
			currentTabElem.removeAttribute('tabindex')
			currentTabElem.setAttribute('aria-selected', true)
			currentTriggerElem.removeAttribute('tabindex')
			currentTriggerElem.setAttribute('aria-selected', true)

			// toggle the other tabs & triggers
			otherTabs.forEach((otherTab) => {
				otherTab.setAttribute('tabindex', -1)
				otherTab.setAttribute('aria-selected', false)
			})
			otherTriggers.forEach((otherTrigger) => {
				otherTrigger.setAttribute('tabindex', -1)
				otherTrigger.setAttribute('aria-selected', false)
			})
		}

		// Handle keyboard navigation events
		function handleKeys(event) {
			const { key: currentKey, currentTarget: currentTab } = event

			// set which element type the event was triggered from
			let actionElements = tabs
			let elementType = isTab(currentTab) ? 'tab' : null
			elementType = isTrigger(currentTab) ? 'trigger' : elementType

			if (elementType === 'trigger') {
				actionElements = triggers
			}

			// locate the element's index in the array (tabs or triggers)
			const currentElementIndex = actionElements.indexOf(currentTab)
			const actionElementsSize = actionElements.length

			// store the first and last tabs & triggers
			const firstTab = tabs[0]
			const lastTab = tabs[actionElementsSize - 1]

			const firstTrigger = triggers[0]
			const lastTrigger = triggers[actionElementsSize - 1]

			// activate the appropriate element based on key pressed
			switch (currentKey) {
				case keys.left:
					if (currentElementIndex === 0) {
						if (elementType === 'tab') {
							activateTab(lastTab)
							enableTab(lastTrigger)
						} else {
							activateTab(lastTrigger)
							enableTab(lastTab)
						}
					} else {
						if (elementType === 'tab') {
							activateTab(tabs[currentElementIndex - 1])
							enableTab(triggers[currentElementIndex - 1])
						} else {
							activateTab(triggers[currentElementIndex - 1])
							enableTab(tabs[currentElementIndex - 1])
						}
					}
					event.preventDefault()
					break
				case keys.right:
					if (currentElementIndex === actionElementsSize - 1) {
						if (elementType === 'tab') {
							activateTab(firstTab)
							enableTab(firstTrigger)
						} else {
							activateTab(firstTrigger)
							enableTab(firstTab)
						}
					} else {
						if (elementType === 'tab') {
							activateTab(tabs[currentElementIndex + 1])
							enableTab(triggers[currentElementIndex + 1])
						} else {
							activateTab(triggers[currentElementIndex + 1])
							enableTab(tabs[currentElementIndex + 1])
						}
					}
					event.preventDefault()
					break
				case keys.home:
					activateTab(firstTab)
					activateTab(firstTrigger)
					event.preventDefault()
					break
				case keys.end:
					activateTab(lastTab)
					activateTab(lastTrigger)
					event.preventDefault()
					break
			}
		}

		function isTab(element) {
			return element && element.classList.contains(`${tabsClass}__tab`)
		}

		function isTrigger(element) {
			return element && element.classList.contains(`${tabsClass}__trigger`)
		}

		function activateTab(element) {
			element.focus()
			element.click()
		}
	},
}
