import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'

import styles from './styles'
import Icon from '../../assets/icons/Icon'
import variables from '../../constants/variables'

type OwnProps = {
  animate: boolean
}

type Props = OwnProps

class HeaderBell extends Component<Props> {
  state = {
    opacity: new Animated.Value(1)
  }

  componentDidUpdate(prevProps: Props) {
    if (!prevProps.animate && this.props.animate) {
      this.animateBell().start()
    }
  }

  animateBell = () => Animated.sequence([this.animateOut(), this.animateIn()])

  animateIn = () =>
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 400,
      delay: 400
    })

  animateOut = () =>
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 100
    })

  render() {
    const { opacity } = this.state

    return (
      <Animated.View style={{ opacity }}>
        <Icon icon="notificationBell" style={{ marginRight: variables.spacing * 2 }} />
      </Animated.View>
    )
  }
}

export default HeaderBell
