import { Dispatch } from 'redux'

import { SET_USER_NAME } from './types'

export const setUsername = (username: string) => (dispatch: Dispatch) =>
  dispatch({ type: SET_USER_NAME, payload: username })
