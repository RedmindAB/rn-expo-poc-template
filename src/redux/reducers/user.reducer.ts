import { SET_USER_NAME } from '../actions/types'

export type UserState = {
  username: string
}

const INITIAL_STATE: UserState = {
  username: undefined
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, username: action.payload }
    default:
      return state
  }
}
