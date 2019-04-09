import * as React from 'react'
import { render } from 'react-dom'
import Quote from './Quote'

render(
  <Quote delayAfterQuote={3000} delayAfterCharacter={150} />,
  document.getElementById('quoteElement'),
)
