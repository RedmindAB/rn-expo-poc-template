import { observable, computed } from 'mobx'

export type UserStateModel = {
  username: string
}

class UserState {
  @observable username = 'Redmind'
}

export default new UserState()
