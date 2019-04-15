import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'
import AnimateNumber from 'react-native-animate-number'

import styles from './styles'
import { LinearGradient } from 'expo'
import colors from '../../../../constants/colors'
import variables from '../../../../constants/variables'

type OwnProps = {
  value: number
  future?: boolean
  year?: number
  hasNavigated: boolean
}

type Props = OwnProps

const ANIMATION_DURATION = 800
const VALUE_HEIGHT_DIVIDER = 7

class Bar extends Component<Props> {
  state = {
    height: new Animated.Value(0)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.hasNavigated !== this.props.hasNavigated) this.animateHeight().start()
  }

  animateHeight = () =>
    Animated.timing(this.state.height, {
      toValue: this.props.value / VALUE_HEIGHT_DIVIDER,
      duration: ANIMATION_DURATION
    })

  render() {
    const { value, future, year = 'Year' } = this.props
    const { height } = this.state

    const gradient = future
      ? ['rgb(255, 186, 74)', 'rgb(255, 130, 77)']
      : ['rgb(255, 186, 74)', 'rgb(255, 159, 77)', 'rgb(255, 59, 90)']

    return (
      <View style={{ alignItems: 'center', width: 40 }}>
        <AnimateNumber
          value={value}
          formatter={val => parseFloat(val).toFixed(0)}
          steps={20}
          style={[styles.value, { fontFamily: future ? 'Montserrat-Medium' : 'Montserrat-Bold' }]}
        />
        <Animated.View style={[styles.container, { height }]}>
          <LinearGradient
            style={[styles.container, { flex: 1 }]}
            colors={gradient}
            locations={future ? [0, 1] : [0, 0.2, 1]}
          />
        </Animated.View>
        <View style={{ height: 1, opacity: 0.5, backgroundColor: colors.white, width: 40 }} />
        <Text
          style={{
            color: colors.white,
            marginTop: variables.spacing,
            fontFamily: year === 19 ? 'Montserrat-Bold' : 'Montserrat-Regular'
          }}
        >
          {year}
        </Text>
      </View>
    )
  }
}

export default Bar
