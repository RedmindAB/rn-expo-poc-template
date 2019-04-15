import React, { Component, Fragment } from 'react'
import { View, Text, Animated, Easing, ScrollView, Alert } from 'react-native'
import AnimateNumber from 'react-native-animate-number'

import styles from './styles'
import ScreenTitle from '../../../../components/common/ScreenTitle'
import Button from '../../../../components/common/Button'
import TimeSpanFilter from '../../../../components/TimeSpanFilter/TimeSpanFilter'
import PanelsAmount from '../../../../components/PanelsAmount/PanelsAmount'
import LiveEnergyProduction from '../../../../components/LiveEnergyProduction/LiveEnergyProduction'
import variables from '../../../../constants/variables'
import SkewedCard from '../../../../components/SkewedCard/SkewedCard'
import SlideUpFadeIn from '../../../../components/SlideUpFadeIn'
import colors from '../../../../constants/colors'
import Icon from '../../../../assets/icons/Icon'
import defaultStyles from '../../../../constants/defaultStyles'
import { HEIGHT } from '../../../../components/SkewedCard/styles'
import SlideLeftFadeIn from '../../../../components/SlideLeftFadeIn/SlideLeftFadeIn'

type OwnProps = {}

type Props = OwnProps

type State = {
  cardOffset_one: Animated.Value
  cardOffset_two: Animated.Value
}

const OVERLAP = 16

const CARD_CONTAINER_ANIMATION_DELAY = 250
const CARD_CONTAINER_ANIMATION_DURATION = 325
const CARD_ANIMATION_STEP_DURATION = 325

const CARD_OFFSET_ONE = [HEIGHT - OVERLAP, 32]
const CARD_OFFSET_TWO = [(HEIGHT - OVERLAP) * 2, HEIGHT - OVERLAP + 32, 64]

class Home extends Component<Props, any> {
  state = {
    cardOffset_one: new Animated.Value(-CARD_OFFSET_ONE[0]),
    cardOffset_two: new Animated.Value(-CARD_OFFSET_TWO[0]),
    cardContainerOpacity: new Animated.Value(0),
    cardContainerOffset: new Animated.Value(64),
    filterHasBeenSelected: false,
    selectedDateRangeIndex: 0,
    dateRangeData: [
      {
        energyProduced: 1500,
        villasPowered: 2,
        profit: 0,
        range: 'day',
        range_current: 'today'
      },
      {
        energyProduced: 1500 * 7,
        villasPowered: 1 * 7,
        profit: 55.14 * 7,
        range: 'week',
        range_current: 'this week'
      },
      {
        energyProduced: 1500 * 7 * 30,
        villasPowered: 1 * 7 * 30,
        profit: 55.14 * 7 * 30,
        range: 'month',
        range_current: 'this month'
      },
      {
        energyProduced: 1500 * 7 * 30 * 2,
        villasPowered: 1 * 7 * 30 * 2,
        profit: 55.14 * 7 * 30 * 2,
        range: 'year',
        range_current: 'this year'
      }
    ]
  }

  componentDidMount() {
    this.animateCards().start(() =>
      this.setState({
        dateRangeData: [
          { ...this.state.dateRangeData[0], profit: 55.14 },
          ...this.state.dateRangeData.slice(1)
        ]
      })
    )
  }

  animateCardContainerOpacity = () =>
    Animated.timing(this.state.cardContainerOpacity, {
      toValue: 1,
      duration: CARD_CONTAINER_ANIMATION_DURATION,
      delay: CARD_CONTAINER_ANIMATION_DELAY
    })

  animateCardContainerOffset = () =>
    Animated.timing(this.state.cardContainerOffset, {
      toValue: 0,
      duration: CARD_CONTAINER_ANIMATION_DURATION,
      delay: CARD_CONTAINER_ANIMATION_DELAY
    })

  animateCardOne = () =>
    Animated.timing(this.state.cardOffset_one, {
      toValue: -CARD_OFFSET_ONE[1],
      duration: CARD_ANIMATION_STEP_DURATION
    })

  animateCardTwo = () =>
    Animated.timing(this.state.cardOffset_two, {
      toValue: -CARD_OFFSET_TWO[2],
      duration: CARD_ANIMATION_STEP_DURATION
    })

  animateCards = () =>
    Animated.sequence([
      Animated.parallel([this.animateCardContainerOpacity(), this.animateCardContainerOffset()]),
      Animated.parallel([this.animateCardOne(), this.animateCardTwo()])
    ])

  onSelectFilter = (index: number) => {
    this.setState({ selectedDateRangeIndex: index, filterHasBeenSelected: true })
  }

  render() {
    const {
      cardOffset_one,
      cardOffset_two,
      cardContainerOpacity,
      cardContainerOffset,
      selectedDateRangeIndex,
      dateRangeData,
      filterHasBeenSelected
    } = this.state

    return (
      <ScrollView bounces={false}>
        <ScreenTitle title="My Investments" style={{ marginLeft: variables.spacing * 2 }} />
        <TimeSpanFilter
          style={{ marginBottom: variables.spacing * 2 }}
          onSelectFilter={this.onSelectFilter}
        />
        <Animated.View
          style={[
            styles.cardContainer,
            { opacity: cardContainerOpacity, transform: [{ translateY: cardContainerOffset }] }
          ]}
        >
          <SkewedCard
            colors={[colors.red, colors.orange]}
            start={[0, 1]}
            end={[1, 0]}
            style={{ zIndex: 3 }}
            contentContainerStyle={styles.cardContentContainer}
          >
            <Text style={styles.cardTitle}>
              Energy produced {dateRangeData[selectedDateRangeIndex].range_current}
            </Text>
            <View
              style={[
                defaultStyles.row,
                { justifyContent: 'space-between', alignItems: 'flex-end' }
              ]}
            >
              {selectedDateRangeIndex === 0 && (
                <SlideLeftFadeIn delay={filterHasBeenSelected ? 0 : 400}>
                  <View style={defaultStyles.row}>
                    <Text style={[defaultStyles.extraBoldText, { color: colors.white }]}>
                      {dateRangeData[selectedDateRangeIndex].energyProduced}{' '}
                    </Text>
                    <Text style={[defaultStyles.lightText, { color: colors.white }]}>kWh</Text>
                  </View>
                </SlideLeftFadeIn>
              )}
              {selectedDateRangeIndex === 1 && (
                <SlideLeftFadeIn>
                  <View style={defaultStyles.row}>
                    <Text style={[defaultStyles.extraBoldText, { color: colors.white }]}>
                      {dateRangeData[selectedDateRangeIndex].energyProduced}{' '}
                    </Text>
                    <Text style={[defaultStyles.lightText, { color: colors.white }]}>kWh</Text>
                  </View>
                </SlideLeftFadeIn>
              )}
              {selectedDateRangeIndex === 2 && (
                <SlideLeftFadeIn>
                  <View style={defaultStyles.row}>
                    <Text style={[defaultStyles.extraBoldText, { color: colors.white }]}>
                      {dateRangeData[selectedDateRangeIndex].energyProduced}{' '}
                    </Text>
                    <Text style={[defaultStyles.lightText, { color: colors.white }]}>kWh</Text>
                  </View>
                </SlideLeftFadeIn>
              )}
              {selectedDateRangeIndex === 3 && (
                <SlideLeftFadeIn>
                  <View style={defaultStyles.row}>
                    <Text style={[defaultStyles.extraBoldText, { color: colors.white }]}>
                      {dateRangeData[selectedDateRangeIndex].energyProduced}{' '}
                    </Text>
                    <Text style={[defaultStyles.lightText, { color: colors.white }]}>kWh</Text>
                  </View>
                </SlideLeftFadeIn>
              )}
              <Icon icon="solarPanelWithSun" style={{ tintColor: colors.white, marginRight: 24 }} />
            </View>
          </SkewedCard>
          <Animated.View style={{ zIndex: 2, transform: [{ translateY: cardOffset_one }] }}>
            <SkewedCard
              colors={['rgb(255, 165, 57)', colors.yellow]}
              start={[0, 1]}
              end={[1, 0]}
              contentContainerStyle={styles.cardContentContainer}
            >
              <Text style={styles.cardTitle}> </Text>
              {selectedDateRangeIndex === 0 && (
                <Fragment>
                  <Text style={styles.cardTitle}>This could power</Text>
                  <SlideUpFadeIn delay={filterHasBeenSelected ? 0 : 800}>
                    <View style={defaultStyles.row}>
                      <Text style={[defaultStyles.extraBoldText, { color: colors.white }]}>8 </Text>
                      <Text style={[defaultStyles.lightText, { color: colors.white }]}>
                        villas for{' '}
                      </Text>
                      <Text style={[defaultStyles.extraBoldText, { color: colors.white }]}>1 </Text>
                      <Text style={[defaultStyles.lightText, { color: colors.white }]}>
                        {dateRangeData[selectedDateRangeIndex].range}
                      </Text>
                    </View>
                  </SlideUpFadeIn>
                </Fragment>
              )}
              {selectedDateRangeIndex === 1 && (
                <Fragment>
                  <Text style={styles.cardTitle}>This could last</Text>
                  <SlideUpFadeIn delay={filterHasBeenSelected ? 0 : 800}>
                    <View style={defaultStyles.row}>
                      <Text style={[defaultStyles.extraBoldText, { color: colors.white }]}>1 </Text>
                      <Text style={[defaultStyles.lightText, { color: colors.white }]}>car </Text>
                      <Text style={[defaultStyles.extraBoldText, { color: colors.white }]}>
                        200{' '}
                      </Text>
                      <Text style={[defaultStyles.lightText, { color: colors.white }]}>miles</Text>
                    </View>
                  </SlideUpFadeIn>
                </Fragment>
              )}
              {selectedDateRangeIndex === 2 && (
                <Fragment>
                  <Text style={styles.cardTitle}>This could charge</Text>
                  <SlideUpFadeIn delay={filterHasBeenSelected ? 0 : 800}>
                    <View style={defaultStyles.row}>
                      <Text style={[defaultStyles.extraBoldText, { color: colors.white }]}>1 </Text>
                      <Text style={[defaultStyles.lightText, { color: colors.white }]}>phone </Text>
                      <Text style={[defaultStyles.extraBoldText, { color: colors.white }]}>
                        50{' '}
                      </Text>
                      <Text style={[defaultStyles.lightText, { color: colors.white }]}>years</Text>
                    </View>
                  </SlideUpFadeIn>
                </Fragment>
              )}
              {selectedDateRangeIndex === 3 && (
                <Fragment>
                  <Text style={styles.cardTitle}>This could save</Text>
                  <SlideUpFadeIn delay={filterHasBeenSelected ? 0 : 800}>
                    <View style={defaultStyles.row}>
                      <Text style={[defaultStyles.extraBoldText, { color: colors.white }]}>
                        50{' '}
                      </Text>
                      <Text style={[defaultStyles.lightText, { color: colors.white }]}>lives </Text>
                      <Text style={[defaultStyles.extraBoldText, { color: colors.white }]}>
                        each{' '}
                      </Text>
                      <Text style={[defaultStyles.lightText, { color: colors.white }]}>year</Text>
                    </View>
                  </SlideUpFadeIn>
                </Fragment>
              )}
            </SkewedCard>
          </Animated.View>
          <Animated.View style={{ zIndex: 1, transform: [{ translateY: cardOffset_two }] }}>
            <SkewedCard
              colors={['rgb(255, 225, 170)', 'rgb(255, 237, 169)']}
              start={[0, 0]}
              end={[1, 0]}
              contentContainerStyle={styles.cardContentContainer}
            >
              <Text style={styles.cardTitle}> </Text>
              <Text style={[styles.cardTitle, { color: colors.dark }]}>Your expected profit</Text>
              <View
                style={[
                  defaultStyles.row,
                  { justifyContent: 'space-between', alignItems: 'flex-end' }
                ]}
              >
                <View style={defaultStyles.row}>
                  <Text style={[defaultStyles.extraBoldText, { color: colors.dark }]}>
                    €
                    <AnimateNumber
                      value={dateRangeData[selectedDateRangeIndex].profit}
                      formatter={val => parseFloat(val).toFixed(2)}
                      steps={20}
                    />
                  </Text>
                </View>
                <Icon icon="flowerPot" style={{ tintColor: colors.dark, marginRight: 24 }} />
              </View>
            </SkewedCard>
          </Animated.View>
        </Animated.View>
        <View style={styles.quickInformation}>
          <PanelsAmount panels={4} />
          <LiveEnergyProduction energyAmount={173} />
        </View>
        <Button
          title="INVEST MORE"
          onPress={() => null}
          style={{ marginTop: variables.spacing * 4 }}
        />
      </ScrollView>
    )
  }
}

export default Home
