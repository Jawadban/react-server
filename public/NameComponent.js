import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {nameAction} from './actions'

class NameDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
	render() {
		return (
			<h1> {this.props.global.name} Pizza </h1>
		)
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return 
// }
const mapStateToProps = (state) => {
	return state;
}

const NameComponent = connect(
	mapStateToProps
)(NameDisplay)

export default NameComponent; 