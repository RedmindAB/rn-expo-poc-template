import React, { Component } from 'react'
import { Animated, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import { NavigationScreenOptions, NavigationScreenProps } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler'

import Container from '../../components/common/Container'
import Icon from '../../assets/icons/Icon'
import BottomNavBar from '../../components/BottomNavBar/BottomNavBar'
import layout from '../../constants/layout'
import styles from './styles'
import Home from './components/Home/Home'
import BackgroundSun from '../../components/BackgroundSun/BackgroundSun'
import HeaderBell from '../../components/HeaderBell'
import colors from '../../constants/colors'
import PlaceHolder from './components/PlaceHolder'
import Statistics from './components/Statistics/Statistics'

type OwnProps = {}

type Props = OwnProps & NavigationScreenProps<{ animate: boolean }>

type State = {
  activeTabIndex: number
  energyWavesOffset: Animated.Value
  hasNavigated: boolean
}

const NAVIGATION_ANIMATION_DURATION = 500

class MainScreen extends Component<Props, State> {
  state = {
    activeTabIndex: 0,
    hasNavigated: false,
    energyWavesOffset: new Animated.Value(0),
    sunOffset: new Animated.Value(0),
    screenContainerOffset: new Animated.Value(0),
    scrollX: new Animated.Value(0)
  }

  static navigationOptions = ({ navigation }): NavigationScreenOptions => ({
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0
    },
    headerLeft: null,
    headerRight: (
      <HeaderBell animate={navigation.state.params && navigation.state.params.animate} />
    ),
    headerTransparent: true
  })

  onPressNavigation = (tabIndex: number) => {
    this.isAllowedToSetActiveIndex = false
    this.setState({ activeTabIndex: tabIndex, hasNavigated: true }, () => {
      this.horizontalScrollContainer.scrollTo({ x: layout.width * this.state.activeTabIndex })
      setTimeout(() => (this.isAllowedToSetActiveIndex = true), 500)
    })
  }

  horizontalScrollContainer
  isAllowedToSetActiveIndex = true
  onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const activeIndex = Math.round(event.nativeEvent.contentOffset.x / layout.width)
    if (this.isAllowedToSetActiveIndex && this.state.activeTabIndex !== activeIndex) {
      this.isAllowedToSetActiveIndex = false
      this.setState(
        { activeTabIndex: activeIndex, hasNavigated: true },
        () => (this.isAllowedToSetActiveIndex = true)
      )
    }
    Animated.event([{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }])(event)
  }

  render() {
    const { screenContainerOffset, scrollX, activeTabIndex, hasNavigated } = this.state

    const sunOffset = scrollX.interpolate({
      inputRange: [0, layout.width * 3],
      outputRange: [0, layout.width * 0.3]
    })

    const energyWavesOffset = scrollX.interpolate({
      inputRange: [0, layout.width * 3],
      outputRange: [-100, -layout.width - 100]
    })

    return (
      <Container safe style={{ backgroundColor: colors.white }}>
        <Animated.View style={{ transform: [{ translateX: sunOffset }] }}>
          <BackgroundSun style={{ position: 'absolute', zIndex: -100 }} />
        </Animated.View>
        <ScrollView
          horizontal
          decelerationRate="fast"
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={el => (this.horizontalScrollContainer = el)}
          scrollEventThrottle={1}
          onScroll={this.onScroll}
        >
          <Animated.View
            style={[styles.screenContainer, { transform: [{ translateX: screenContainerOffset }] }]}
          >
            <ScrollView
              bounces={false}
              style={styles.screen}
              contentContainerStyle={styles.screenScrollView}
            >
              <Home />
            </ScrollView>
            <ScrollView
              bounces={false}
              style={styles.screen}
              contentContainerStyle={styles.screenScrollView}
            >
              <Statistics hasNavigated={hasNavigated} />
            </ScrollView>
            <ScrollView
              bounces={false}
              style={styles.screen}
              contentContainerStyle={styles.screenScrollView}
            >
              <PlaceHolder title="Profile" icon="flowerPot" />
            </ScrollView>
          </Animated.View>
        </ScrollView>
        <Animated.View
          style={[
            styles.energyWaves,
            { transform: [{ translateX: energyWavesOffset }], zIndex: -2 }
          ]}
        >
          <Icon icon="energyWaves" />
        </Animated.View>
        <BottomNavBar onPress={this.onPressNavigation} activeTabIndex={activeTabIndex} />
      </Container>
    )
  }
}

export default MainScreen
