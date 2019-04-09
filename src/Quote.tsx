import * as React from 'react'

interface IProperties {
  delayAfterQuote: number
  delayAfterCharacter: number
}

interface IState {
  message: string | null
  cursorPosition: number
}

const ALL_QUOTES = [
  'Passionate implementer of ideas for mobile and web.',
  'We believe in ideas but especially in turning them into reality.',
  'We favor Pragmatic over dogmatic.',
  'We favor Solutions over problems.',
  'TypeScript, JavaScript, React-Native and React are our technology stuff.',
]

export default class Quote extends React.Component<IProperties, IState> {
  state: IState = {
    message: null,
    cursorPosition: 1,
  }

  private currentInterval: any

  createNewStateObject = () => {
    // change the message and avoid to retrieve the last message again
    const { message } = this.state
    let newMessage
    do {
      newMessage = this.getRandomQuote()
    } while (message ? newMessage === message : newMessage === ALL_QUOTES[0])

    return {
      message: newMessage,
      cursorPosition: 1,
    }
  }

  delayAfterQuote = () => {
    const { delayAfterQuote } = this.props
    return delayAfterQuote ? Number(delayAfterQuote) : 3000
  }

  delayAfterCharacter = () => {
    const { delayAfterCharacter } = this.props
    return delayAfterCharacter ? Number(delayAfterCharacter) : 150
  }

  incrementCursorPositionOnState = () => {
    this.setState({
      cursorPosition: this.state.cursorPosition + 1,
    })
  }

  setNewQuoteOnState = () => {
    setTimeout(() => {
      this.setState(this.createNewStateObject())
    }, this.delayAfterQuote())
  }

  componentDidMount() {
    clearInterval(this.currentInterval)

    setTimeout(() => {
      this.setState(this.createNewStateObject())
      this.currentInterval = setInterval(
        this.incrementCursorPositionOnState,
        this.delayAfterCharacter(),
      )
    }, this.delayAfterQuote())
  }

  componentDidUpdate() {
    if (this.currentInterval && this.isCursorPositionAtEndOfMessage()) {
      this.setNewQuoteOnState()
    }
  }

  isCursorPositionAtEndOfMessage = () => {
    const { message, cursorPosition } = this.state
    return message ? cursorPosition === message.length : true
  }

  componentWillUnmount() {
    clearInterval(this.currentInterval)
    this.currentInterval = null
  }

  getRandomQuote = () => {
    const randomMessageCount = Math.floor(Math.random() * ALL_QUOTES.length)
    return ALL_QUOTES[randomMessageCount]
  }

  render() {
    const { message, cursorPosition } = this.state
    const messageToDisplay = message
      ? message.substring(0, cursorPosition)
      : ALL_QUOTES[0]

    return (
      <h1 className="quotes">
        <span>{messageToDisplay}</span>
      </h1>
    )
  }
}
