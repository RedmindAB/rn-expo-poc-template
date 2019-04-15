import React, { Component } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'

import styles from './styles'
import Icon from '../../assets/icons/Icon'

type OwnProps = {
  onPress: (tabIndex: number) => void
  activeTabIndex: number
}

type Props = OwnProps

class BottomNavBar extends Component<Props> {
  state = {
    activeTab: 'home'
  }

  handlePress = (tabIndex: number, tabName: string) => {
    const { onPress } = this.props
    onPress(tabIndex)
    this.setState({ activeTab: tabName })
  }

  render() {
    const { activeTabIndex } = this.props

    const onPressHome = () => this.handlePress(0, 'home')
    const onPressStatistics = () => this.handlePress(1, 'statistics')
    const onPressProfile = () => this.handlePress(2, 'profile')

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={onPressHome}>
          <View style={styles.navigationContainer}>
            <Icon
              icon="home"
              style={[styles.icon, activeTabIndex === 0 ? styles.activeIcon : {}]}
            />
            <Text style={[styles.text, activeTabIndex === 0 ? styles.activeText : {}]}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressStatistics}>
          <View style={styles.navigationContainer}>
            <Icon
              icon="statistics"
              style={[styles.icon, activeTabIndex === 1 ? styles.activeIcon : {}]}
            />
            <Text style={[styles.text, activeTabIndex === 1 ? styles.activeText : {}]}>
              Industry Statistics
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressProfile}>
          <View style={styles.navigationContainer}>
            <Icon
              icon="profile"
              style={[styles.icon, activeTabIndex === 2 ? styles.activeIcon : {}]}
            />
            <Text style={[styles.text, activeTabIndex === 2 ? styles.activeText : {}]}>
              Profile
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

export default BottomNavBar
