import React, {PropTypes} from 'react'

class AnotherComponent extends React.Component {
	constructor (props) {
		super (props)
	}

	render () {
		return (
			<div>
				<h1> This is my new Component</h1>
			</div>
		)
	}
}


export default AnotherComponent;

// {this.props.global.name}