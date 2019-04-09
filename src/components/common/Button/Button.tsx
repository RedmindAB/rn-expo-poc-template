import React, { Component } from 'react'
import { View, Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native'

import styles from './styles'

type OwnProps = {
  onPress: () => void
  style: StyleProp<ViewStyle>
  title: string
  disabled?: boolean
}

type Props = OwnProps

class Button extends Component<Props> {
  render() {
    const { onPress, title, disabled, style = {} } = this.props

    return (
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View style={[styles.container, style]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Button
