import React from 'react'
import {connect} form 'redux'
import {nameAction} from './actions'

class AddNameComponent extends React.Component {
	constructor(props) {
		super(props)
	}

	nameHandler(event) {

	}

	render() {
		return (
			<Input onChange={this.nameHandler.bind(this)} />
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return dispatch
}

const AddName = connect(mapDispatchToProps)(AddNameComponent)

export default AddName