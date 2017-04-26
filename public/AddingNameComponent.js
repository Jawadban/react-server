import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {nameAction} from './actions'

class AddNameComponent extends React.Component {
	constructor(props) {
		super(props)
	}

	nameHandler(event) {
		this.props.addName(event.target.value)
	}

	render() {
		return (
			<div>
				<h1> Han </h1>
				<input type="text" onChange={this.nameHandler.bind(this)} />
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addName: (text) => dispatch(nameAction(text)),
  }
}

const AddName = connect(mapDispatchToProps)(AddNameComponent)

export default AddName