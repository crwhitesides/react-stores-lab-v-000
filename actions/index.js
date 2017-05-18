import CounterStore from '../stores/counterStore'

function increment (ev) {
  CounterStore.increment()
}

function decrement (ev) {
  CounterStore.decrement()
}

module.exports = {
  increment,
  decrement
}
