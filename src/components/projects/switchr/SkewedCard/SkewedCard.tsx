import React, { Component } from 'react'
import { View, Text, StyleProp, ViewStyle } from 'react-native'

import styles from './styles'
import { LinearGradient } from 'expo'

type OwnProps = {
  style?: StyleProp<ViewStyle>
  contentContainerStyle?: StyleProp<ViewStyle>
  shapeStyle?: StyleProp<ViewStyle>
  color?: string
  colors?: string[]
  start?: number[]
  end?: number[]
  children: any
}

type Props = OwnProps

class SkewedCard extends Component<Props> {
  render() {
    const {
      color,
      colors,
      start,
      end,
      style = {},
      contentContainerStyle = {},
      shapeStyle = {},
      children
    } = this.props

    const Wrapper: any = colors ? LinearGradient : View

    return (
      <View style={[styles.container, style]}>
        <Wrapper
          style={[styles.shape, color ? { backgroundColor: color } : {}, shapeStyle]}
          start={start}
          end={end}
          colors={colors}
        />
        <View style={[styles.contentContainer, contentContainerStyle]}>{children}</View>
      </View>
    )
  }
}

export default SkewedCard
