import React, { Component } from 'react'
import { View, Text, Animated, Easing } from 'react-native'

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

class SlideLeftFadeIn extends Component<Props, State> {
  ANIMATION_DURATION = 250
  ANIMATION_DELAY = this.props.delay

  state = {
    opacity: new Animated.Value(1),
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
      delay: this.ANIMATION_DELAY,
      easing: Easing.elastic(0.5)
    })

  animate = () => Animated.parallel([this.animateOpacity(), this.animateOffset()])

  render() {
    const { opacity, offset } = this.state
    const { children } = this.props

    return (
      <Animated.View style={{ opacity, transform: [{ translateX: offset }] }}>
        {children}
      </Animated.View>
    )
  }
}

export default SlideLeftFadeIn
