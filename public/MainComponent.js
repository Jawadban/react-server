import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
// import {nameAction} from './actions'
import axios from 'axios'

class MainComponent extends React.Component {
	constructor (props) {
		super (props)
	}

	componentDidMount(){
		axios.get('/obj')
	  .then(function (response) {
	    console.log(response.data);
	    // response.on('data', chunk => {
	    // 	console.log(chunk.toString())
	    // })
	  })
	  .catch(function (error) {
	    console.log(error);
	  })
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