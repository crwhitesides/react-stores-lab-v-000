import Store from './Store'

class CounterStore extends Store {
  constructor () {
    super(0)
  }

  increment () {
    const prevState = this.getState()
    this.setState(prevState + 1)
  }

  decrement () {
    const prevState = this.getState()
    this.setState(prevState - 1)
  }
}

const counterStore = new CounterStore();

export default counterStore;
