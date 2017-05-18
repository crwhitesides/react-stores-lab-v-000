import React from 'react';
import actions from '../actions'
import CounterStore from '../stores/counterStore'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: CounterStore.getState()
    };

    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  componentDidMount () {
    this.removeListener = CounterStore.addListener((counter) => {
      this.setState({counter})
    })
    this.setState(CounterStore.getState())
  }

  componentWillUnmount () {
    this.removeListener()
  }

  handleIncrement(ev) {
    ev.preventDefault()
    actions.increment()
  }

  handleDecrement(ev) {
    ev.preventDefault()
    actions.decrement()
  }

  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrement}>
            -
          </button>
          <button className='increment' onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
