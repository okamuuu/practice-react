import { createStore, applyMiddleware } from 'redux'
import { reducer as notificationsReducer } from 'reapop'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducers from '../reducers'
import rootSaga from "../sagas"

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger()

const middleware = [thunk, sagaMiddleware, logger]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducers, initialState)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  sagaMiddleware.run(rootSaga)
  return store
}
