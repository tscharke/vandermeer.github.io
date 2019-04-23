import { of } from 'rxjs'
import { delay, repeat, switchMap } from 'rxjs/operators'

const getRandomNumber = (max: number): number => {
  let lastValue = 0
  let newValue = 0

  do {
    newValue = Math.floor(Math.random() * (max - 1))
  } while (newValue === lastValue)

  return (lastValue = newValue)
}

export const createObservable = (delayAfterQuote: number, maxValue: number) =>
  of('')
    .pipe(
      switchMap(() =>
        of(getRandomNumber(maxValue)).pipe(delay(delayAfterQuote)),
      ),
    )
    .pipe(repeat())

export const ALL_QUOTES = [
  'Passionate implementer of ideas for mobile and web.',
  'We believe in ideas but especially in turning them into reality.',
  'We favor Pragmatic over dogmatic.',
  'We favor Solutions over problems.',
  'TypeScript, JavaScript, React-Native and React are our technology stuff.',
]
