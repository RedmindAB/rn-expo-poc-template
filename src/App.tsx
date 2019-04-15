import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Font } from 'expo'

import AppNavigator from './navigation'
import colors from './constants/colors'
import config from './constants/config'

import { Provider } from 'mobx-react/native'
import mobx from './mobx'

export default class App extends React.Component {
  state = {
    fontsLoaded: !config.USE_CUSTOM_FONTS
  }

  async componentDidMount() {
    if (config.USE_CUSTOM_FONTS) {
      await Font.loadAsync({
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
        'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf')
      })

      this.setState({ fontsLoaded: true })
    }
  }

  render() {
    const { fontsLoaded } = this.state

    return (
      <Provider {...mobx}>
        <View style={styles.container}>{fontsLoaded && <AppNavigator />}</View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
})
