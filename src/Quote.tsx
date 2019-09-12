import * as React from 'react'
import { ALL_QUOTES, createObservable } from './helper'

const fadeDelay: number = 2000

interface IProperties {
  delay: number
}

const Quote = ({ delay }: IProperties) => {
  const [message, setMessage] = React.useState(ALL_QUOTES[0])
  const [classExtension, setClassExtension] = React.useState<string|null>()

  React.useEffect(() => {
    let fadeTimer: any
    const observable = createObservable(delay, ALL_QUOTES.length)
    const subscriber = observable.subscribe((index: number) => {
      setClassExtension('fade')
      setMessage(ALL_QUOTES[index])

      fadeTimer = setTimeout(() => {
        setClassExtension(null)
        clearTimeout(fadeTimer)
      }, fadeDelay)
    })
    return () => {
      clearTimeout(fadeTimer)
      subscriber.unsubscribe()
    }
  }, [])

  return <h1 className={`quotes ${classExtension}`}>{message}</h1>
}

export default Quote
