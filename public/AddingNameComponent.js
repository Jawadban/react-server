import React from 'react'
import {connect} form 'redux'
import {nameAction} from './actions'

class AddName extends React.Component {
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

export default AddName;