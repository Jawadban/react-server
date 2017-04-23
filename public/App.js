import React, {propTypes} from 'react'
import { connect } from 'react-redux'

import { CounterApp } from './actions' 

class App extends React.Component {
	constructor (props) {
		super (props)
	}
	render () {
		return (
			<div>
				<h1>Hello React</h1>
			</div>
		)
	}
}