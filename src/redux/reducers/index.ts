import { persistCombineReducers } from 'redux-persist'
import { AsyncStorage } from 'react-native'

import userReducer, { UserState } from './user.reducer'

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
  whitelist: ['user']
}

export type MainState = {
  user: UserState
}

export default persistCombineReducers(persistConfig, {
  user: userReducer
})
