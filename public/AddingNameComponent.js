import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { CounterActions, decrementAction } from './actions'
import {nameAction} from './actions'
import {Router, Route, Link, RouteHandler} from 'react-router';
import AnotherComponent from './AnotherComponent'



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
			<Link to="/test" ><button>Clickme</button></Link>
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

const AddName = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddNameComp)

export default AddName;

