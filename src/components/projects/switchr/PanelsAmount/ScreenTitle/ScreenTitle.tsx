import React, { Component } from 'react'
import { View, Text, StyleProp, TextStyle } from 'react-native'

import styles from './styles'

type OwnProps = {
  title: string
  style?: StyleProp<TextStyle>
}

type Props = OwnProps

class ScreenTitle extends Component<Props> {
  render() {
    const { title, style = {} } = this.props

    return <Text style={[styles.title, style]}>{title}</Text>
  }
}

export default ScreenTitle
