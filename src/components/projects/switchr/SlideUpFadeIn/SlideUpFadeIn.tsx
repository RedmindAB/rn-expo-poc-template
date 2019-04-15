import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'

import styles from './styles'

type OwnProps = {
  children: any
  delay?: number
}

type Props = OwnProps

type State = {
  opacity: Animated.Value
  offset: Animated.Value
}

class SlideUpFadeIn extends Component<Props, State> {
  ANIMATION_DURATION = 250
  ANIMATION_DELAY = this.props.delay

  state = {
    opacity: new Animated.Value(0),
    offset: new Animated.Value(32)
  }

  componentDidMount() {
    this.animate().start()
  }

  animateOpacity = () =>
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: this.ANIMATION_DURATION,
      delay: this.ANIMATION_DELAY
    })

  animateOffset = () =>
    Animated.timing(this.state.offset, {
      toValue: 0,
      duration: this.ANIMATION_DURATION,
      delay: this.ANIMATION_DELAY
    })

  animate = () => Animated.parallel([this.animateOpacity(), this.animateOffset()])

  render() {
    const { opacity, offset } = this.state
    const { children } = this.props

    return (
      <Animated.View style={{ opacity, transform: [{ translateY: offset }] }}>
        {children}
      </Animated.View>
    )
  }
}

export default SlideUpFadeIn
