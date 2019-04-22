import { Observable } from 'rxjs'

const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * (max - 1))
}

export const createObservable = (delayAfterQuote: number) =>
  new Observable(subscriber => {
    let lastValue = 0
    let interval = setInterval(() => {
      let value = 0
      do {
        value = getRandomNumber(ALL_QUOTES.length)
      } while (value === lastValue)
      lastValue = value
      subscriber.next(value)
    }, delayAfterQuote)
    return () => {
      clearInterval(interval)
    }
  })

export const ALL_QUOTES = [
  'Passionate implementer of ideas for mobile and web.',
  'We believe in ideas but especially in turning them into reality.',
  'We favor Pragmatic over dogmatic.',
  'We favor Solutions over problems.',
  'TypeScript, JavaScript, React-Native and React are our technology stuff.',
]
