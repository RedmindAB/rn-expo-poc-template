import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import AppNavigator from './navigation'
import configureStore from './redux/store'
import colors from './constants/colors'

const { store, persistor } = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppNavigator />
          </PersistGate>
        </Provider>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
})
