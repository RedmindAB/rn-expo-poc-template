import React, { Component } from 'react'
import { Text, View } from 'react-native'

type OwnProps = {}

type Props = OwnProps

class MainScreen extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
          Hello Redmind!
        </Text>
      </View>
    )
  }
}

export default MainScreen
