import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as notificationsReducer } from 'reapop'

import { FETCH_SUCCESSED } from '../actions'

const fetchInitialState = {
  posts: []
}

function fetch(state = fetchInitialState, action) {
  switch (action.type) {
  case FETCH_SUCCESSED:
    return Object.assign({}, state, action.payload)
  default:
    return state
  }
}

const rootReducer = combineReducers({
  notifications: notificationsReducer(),
  fetch,
  routing: routerReducer,
  form: formReducer,
})

export default rootReducer
