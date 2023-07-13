const INTERVAL_IN_MS = 5000
const QUOTE_ELEMENT_NAMES = "h2.quote, p.quote"

;(() => {
  const allElements = document.querySelectorAll(QUOTE_ELEMENT_NAMES)
  const lengthOfAllElements = allElements.length -1
  let nextIndex = 1

  setInterval(() => {
    (document.querySelector(`${QUOTE_ELEMENT_NAMES}:not(.hidden)`) as any).classList.add('hidden')
    allElements[nextIndex].classList.remove('hidden')

    nextIndex = nextIndex === lengthOfAllElements ? 0 : nextIndex + 1
  }, INTERVAL_IN_MS)
})()
