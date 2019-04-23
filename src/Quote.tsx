import * as React from 'react'
import { ALL_QUOTES, createObservable } from './helper'

interface IProperties {
  delayAfterQuote: number
}

const Quote = ({ delayAfterQuote }: IProperties) => {
  const [message, setMessage] = React.useState(ALL_QUOTES[0])

  React.useEffect(() => {
    const observable = createObservable(delayAfterQuote, ALL_QUOTES.length)
    const subscriber = observable.subscribe((index: number) =>
      setMessage(ALL_QUOTES[index]),
    )
    return () => subscriber.unsubscribe()
  }, [])

  return <h1 className="quotes">{message}</h1>
}

export default Quote
