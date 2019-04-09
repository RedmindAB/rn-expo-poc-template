import React, { Component } from 'react'
import { View, SafeAreaView, StyleProp, ViewStyle } from 'react-native'

import styles from './styles'

type OwnProps = {
  children: any
  safe?: boolean
  style?: StyleProp<ViewStyle>
}

type Props = OwnProps

class Container extends Component<Props> {
  render() {
    const { children, safe, style = {} } = this.props
    const Wrapper = safe ? SafeAreaView : View

    return <Wrapper style={[styles.container, style]}>{children}</Wrapper>
  }
}

export default Container
