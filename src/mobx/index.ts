import user, { UserStateModel } from './user'

export type MainState = {
  user: UserStateModel
}
export default {
  user
} as MainState
