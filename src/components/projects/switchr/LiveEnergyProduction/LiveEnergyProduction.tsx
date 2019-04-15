import React, { Component } from 'react'
import { View, Text } from 'react-native'
import AnimateNumber from 'react-native-animate-number'

import styles from './styles'

type OwnProps = {
  energyAmount: number
}

type Props = OwnProps

const random = (min, max) => Math.round(Math.random() * (max - min)) + min

class LiveEnergyProduction extends Component<Props> {
  state = {
    amount: this.props.energyAmount,
    hasGenerated: false
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ hasGenerated: true, amount: this.state.amount - random(-4, 4) })
    }, 5 * 1000)
  }

  render() {
    const { amount, hasGenerated } = this.state

    return (
      <View>
        <Text style={styles.title}>Energy produced live</Text>
        <View style={styles.energyContainer}>
          <Text style={styles.energyAmount}>
            <AnimateNumber
              value={amount}
              formatter={val => parseFloat(val).toFixed(0)}
              steps={hasGenerated ? 20 : 0}
            />
          </Text>
          <Text style={styles.energyMeasurement}>kW</Text>
        </View>
      </View>
    )
  }
}

export default LiveEnergyProduction
