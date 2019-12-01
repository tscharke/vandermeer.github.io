const INTERVAL_IN_MS = 8000

;(() => {
  const allElements = document.querySelectorAll('p.quote')
  const lengthOfAllElements = allElements.length -1
  let nextIndex = 1
  
  setInterval(() => {
    (document.querySelector('p.quote:not(.hidden)') as any).classList.add('hidden')
    allElements[nextIndex].classList.remove('hidden')

    nextIndex = nextIndex === lengthOfAllElements ? 0 : nextIndex + 1
  }, INTERVAL_IN_MS)
})()
