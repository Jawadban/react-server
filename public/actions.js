/*
action creators
*/

export function CounterActions() 	{
	return {type:'Add'}
}

export function decrementAction() {
	return {type:'Subtract'}
}

export function nameAction(text) {
	return {type: 'addName', text }
}