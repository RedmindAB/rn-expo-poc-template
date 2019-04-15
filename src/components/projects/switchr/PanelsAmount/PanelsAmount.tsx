import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import Icon from '../../assets/icons/Icon'

type OwnProps = {
  panels: number
}

type Props = OwnProps

class PanelsAmount extends Component<Props> {
  render() {
    const { panels } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Panels</Text>
        <Text style={styles.panelAmount}>{panels}</Text>
      </View>
    )
  }
}

export default PanelsAmount
