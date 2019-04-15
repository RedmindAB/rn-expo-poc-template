import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'

import styles from './styles'

type OwnProps = {
  style?: StyleProp<ViewStyle>
  onSelectFilter: (index: number) => void
  values?: string[]
}

type Props = OwnProps

class TimeSpanFilter extends Component<Props> {
  state = {
    activeIndex: 0
  }

  renderTimeSpan = (timeSpan: string, index: number) => {
    const { onSelectFilter, values = Array(4).fill(null) } = this.props
    const onPress = () => {
      this.setState({ activeIndex: index })
      onSelectFilter(index)
    }
    const active = this.state.activeIndex === index
    const width = (100 / values.length).toString().concat('%')

    return (
      <TouchableOpacity key={timeSpan + index} onPress={onPress} style={{ width }}>
        <View style={[styles.timeSpanContainer, active ? styles.timeSpanContainerActive : {}]}>
          <Text style={[styles.timeSpanText, active ? styles.timeSpanTextActive : {}]}>
            {timeSpan.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { style, values } = this.props
    const timeSpans = values || ['day', 'week', 'month', 'year']

    return (
      <View style={[styles.container, style]}>
        {timeSpans.map((timeSpan, index) => this.renderTimeSpan(timeSpan, index))}
      </View>
    )
  }
}

export default TimeSpanFilter
