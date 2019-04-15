import React, { Component } from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'

import styles from './styles'

type OwnProps = {
  style?: StyleProp<ViewStyle>
}

type Props = OwnProps

class BackgroundSun extends Component<Props> {
  render() {
    const { style } = this.props

    return (
      <View style={[styles.container, style]}>
        <View style={[styles.circle, styles.circleOne]} />
        <View style={[styles.circle, styles.circleTwo]} />
        <View style={[styles.circle, styles.circleThree]} />
      </View>
    )
  }
}

export default BackgroundSun
