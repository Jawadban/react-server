import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
// import {nameAction} from './actions'

class MainComponent extends React.Component {
	constructor (props) {
		super (props)
	}

	render () {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}


export default MainComponent;