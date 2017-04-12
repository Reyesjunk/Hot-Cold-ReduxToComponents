import  {createStore, applyMiddleware} from 'redux'

import {hotColdReducer, initialState} from './reducers';


const logger = (store) => (next) => (action) => {
  console.log("action fired", action)
  next(action)
}
const middleware = applyMiddleware(logger)

const store = createStore(hotColdReducer, initialState, middleware)

store.subscribe(() => {
  console.log("store changed", store.getState())
})
store.dispatch({type: "ADD_GUESSES", guesses:[11]})
store.dispatch({type: "START_NEW_GAME" })
store.dispatch({type: "OPEN_INFO_MODAL" })

export default createStore(hotColdReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());