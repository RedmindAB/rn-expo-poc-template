import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import Bar from './components/Bar/Bar'
import { LinearGradient } from 'expo'

type OwnProps = {
  hasNavigated: boolean
}

type Props = OwnProps

const bars = [
  {
    value: 305
  },
  {
    value: 404,
    year: 17
  },
  {
    value: 518,
    year: 18
  },
  {
    value: 641,
    year: 19
  },
  {
    value: 772,
    year: 20,
    future: true
  },
  {
    value: 921,
    year: 21,
    future: true
  },
  {
    value: 1123,
    year: 22,
    future: true
  },
  {
    value: 1250,
    year: 23,
    future: true
  },
  {
    value: 1321,
    year: 24,
    future: true
  }
]

class InstallationsChart extends Component<Props> {
  render() {
    const { hasNavigated } = this.props

    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['rgb(255, 215, 53)', 'rgb(255, 165, 57)']}
          locations={[0.6, 1]}
          style={styles.gradient}
          start={[1, 0]}
        />
        <Text style={styles.title}>Global Cumulative Installations</Text>
        <Text style={styles.subtitle}>GW</Text>
        <View style={styles.forecastContainer}>
          <Text style={[styles.forecast]}>HISTORY</Text>
          <Text
            style={[
              styles.forecast,
              {
                fontFamily: 'Montserrat-Regular'
              }
            ]}
          >
            FORECAST
          </Text>
        </View>
        <View style={styles.barContainer}>
          {bars.map(({ value, year, future }) => (
            <Bar value={value} year={year} future={future} hasNavigated={hasNavigated} />
          ))}
        </View>
      </View>
    )
  }
}

export default InstallationsChart
