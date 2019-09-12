import * as React from 'react'
import { render } from 'react-dom'
import Quote from './Quote'

render(
  <Quote delay={10000} />,
  document.getElementById('quoteElement'),
)
