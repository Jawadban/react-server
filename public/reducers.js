const initialState = {
	counter: 0,
	name: 'Jawad'
}

function counterReducer(state, action) {
	if (typeof state === 'undefined') {
		return initialState;
	}

	switch (action.type) {
		case 'Add':
			return Object.assign( {}, state, { counter: state.counter + 1 })
		case 'Subtract':
			return Object.assign( {}, state, { counter: state.counter - 1 })
		case 'addName':
			return Object.assign( {}, state, { name: action.text })
		default: 
			return state
	}
}

export default counterReducer;