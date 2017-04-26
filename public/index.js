import React from 'react'
import {render} from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import counterReducer from './reducers'
import MainComponent from './MainComponent'
import AnotherComponent from './AnotherComponent'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import NameComponent from './NameComponent'
import AddingName from './AddingNameComponent'
// let store = createStore(
// 	combineReducers ({
// 		global: counterReducer,
// 		routing: routerReducer
// 	})
// )

const store = createStore(
    combineReducers({
        global: counterReducer,
        routing: routerReducer
    }));


const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
			<Route path="/" component={MainComponent}>
        <IndexRoute component={App} />
        <Route path="test" component={AnotherComponent} />
        <Route path="name" component={NameComponent} />
        <Route path='addName' component={AddingName} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app")
)