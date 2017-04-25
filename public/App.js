
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { CounterActions, decrementAction } from './actions'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  increaseHandler() {
    this.props.incrament()
  }

  decreaseHandler() {
  	this.props.decrament()
  }

  render() {
    return (
      <div>
        <h1>Hello Redux</h1>
        <h2>Counter: {this.props.global.counter}</h2>
        <button onClick={this.increaseHandler.bind(this)}>Increase</button>
        <button onClick={this.decreaseHandler.bind(this)}>Decrease</button>
      </div>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrament: () => dispatch(CounterActions("Add")),
    decrament: () => dispatch(decrementAction('Subtract'))
  }
}

const mapStateToProps = (state) => {
  return state;
}

const DefaultApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default DefaultApp;

