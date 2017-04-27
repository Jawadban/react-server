import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { CounterActions, decrementAction } from './actions'
import {nameAction} from './actions'

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   increaseHandler() {
//     this.props.incrament()
//   }

//   decreaseHandler() {
//   	this.props.decrament()
//   }

//   nameHandler(event) {
// 		this.props.addName(event.target.value)
// 	}

//   render() {
//     return (
//       <div>
//         <h1>Hello Redux</h1>
//         <h2>Counter: {this.props.global.counter}</h2>
//         <button onClick={this.increaseHandler.bind(this)}>Increase</button>
//         <button onClick={this.decreaseHandler.bind(this)}>Decrease</button>
//         <input type="text" onChange={this.nameHandler.bind(this)} />
//         <h1>{this.props.global.name}</h1>
//       </div>
//       )
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrament: () => dispatch(CounterActions()),
//     decrament: () => dispatch(decrementAction()),
//     addName: (text) => dispatch(nameAction(text))
//   }
// }

// const mapStateToProps = (state) => {
//   return state;
// }

// const DefaultApp = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)

// export default DefaultApp;


class AddNameComp extends React.Component {
	constructor(props) {
		super(props)
	}

	textHanler(event) {
		this.props.addTheName(event.target.value)
	}

	render() {
		return (
		<div>
			<h1>{this.props.global.name}</h1>
			<textarea type='text' onChange={this.textHanler.bind(this)} />
		</div>
		)
	}
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => {
	return {
		addTheName: (text) => dispatch(nameAction(text))
	}
}

const DefaultApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddNameComp)

export default DefaultApp;












// class AddNameComponent extends React.Component {
// 	constructor(props) {
// 		super(props)
// 	}

// 	  increaseHandler() {
//     this.props.incrament()
//   }

// 	nameHandler(event) {
// 		this.props.addName(event.target.value)
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1> Han </h1>
// 				        <button onClick={this.increaseHandler.bind(this)}>Increase</button>
// 				<input type="text" onChange={this.nameHandler.bind(this)} />
// 			</div>
// 		)
// 	}
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrament: () => dispatch(CounterActions()),
//     addName: (text) => dispatch(nameAction(text)),
//   }
// }

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     addName: (text) => dispatch(nameAction(text)),
// //     incrament: () => dispatch(CounterActions()),
// //   }
// // }

// const mapStateToProps = connect(
// 	return state
// )

// const AddName = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AddNameComponent)

// // connect(mapDispatchToProps)(AddNameComponent)

// export default AddName