import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import ScreenTitle from '../../../../components/common/ScreenTitle'
import variables from '../../../../constants/variables'
import defaultStyles from '../../../../constants/defaultStyles'
import TimeSpanFilter from '../../../../components/TimeSpanFilter/TimeSpanFilter'
import Button from '../../../../components/common/Button'
import informationStyles from '../../../../components/LiveEnergyProduction/styles'
import InstallationsChart from '../../../../components/InstallationsChart/InstallationsChart'

type OwnProps = {
  hasNavigated: boolean
}

type Props = OwnProps

class Statistics extends Component<Props> {
  render() {
    const { hasNavigated } = this.props

    return (
      <View>
        <ScreenTitle title="Statistics" style={{ marginLeft: variables.spacing * 2 }} />
        <TimeSpanFilter
          onSelectFilter={() => null}
          values={['Industry', 'News']}
          style={{ marginBottom: variables.spacing * 2 }}
        />
        <InstallationsChart hasNavigated={hasNavigated} />
        <View style={{ marginVertical: variables.spacing * 4 }}>
          <Text style={informationStyles.title}>Solar energy is used most in</Text>
          <Text
            style={[defaultStyles.lightText, { textAlign: 'center', marginTop: variables.spacing }]}
          >
            Germany <Text style={[defaultStyles.extraBoldText, { fontSize: 26 }]}>30%</Text>
          </Text>
        </View>
        <Button title="CHECK ALL COUNTRIES" onPress={() => null} />
      </View>
    )
  }
}

export default Statistics
