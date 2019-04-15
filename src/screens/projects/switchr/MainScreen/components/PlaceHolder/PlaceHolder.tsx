import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import ScreenTitle from '../../../../components/common/ScreenTitle'
import variables from '../../../../constants/variables'
import Icon from '../../../../assets/icons/Icon'
import defaultStyles from '../../../../constants/defaultStyles'
import colors from '../../../../constants/colors'

type OwnProps = {
  title: string
  icon: string
}

type Props = OwnProps

class PlaceHolder extends Component<Props> {
  render() {
    const { title, icon } = this.props

    return (
      <View>
        <ScreenTitle title={title} style={{ marginLeft: variables.spacing * 2 }} />
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 230 }}>
          <Icon icon={icon} style={{ tintColor: colors.black }} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: variables.spacing * 3
            }}
          >
            <View style={{ height: 2, width: 64, backgroundColor: colors.dark }} />
            <View
              style={{
                height: 8,
                width: 8,
                marginHorizontal: 8,
                backgroundColor: colors.dark,
                borderRadius: 4
              }}
            />
            <View style={{ height: 2, width: 64, backgroundColor: colors.dark }} />
          </View>
          <Text style={defaultStyles.lightText}>Coming soon!</Text>
        </View>
      </View>
    )
  }
}

export default PlaceHolder
