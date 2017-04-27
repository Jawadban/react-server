import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { CounterActions, decrementAction } from './actions'
import {nameAction} from './actions'


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

