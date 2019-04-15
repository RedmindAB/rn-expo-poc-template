import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { inject, observer } from 'mobx-react/native'

import { MainState } from '../../redux/reducers'

type OwnProps = {}

type Props = OwnProps & MainState

@inject('user')
@observer
class MainScreen extends Component<Props> {
  render() {
    const { user } = this.props

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
          Hello {user.username}!
        </Text>
      </View>
    )
  }
}

export default MainScreen
