import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'

import rootReducer from '../reducers'

export default function configureStore() {
  const middlewares = [thunk]

  const store = createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(...middlewares))
  )

  let persistor = persistStore(store)
  return { persistor, store }
}
