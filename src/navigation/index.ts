import { createAppContainer, createStackNavigator } from 'react-navigation'

import MainScreen from '../screens/MainScreen'

const MainStack = createStackNavigator({
  Main: MainScreen
})

export default createAppContainer(MainStack)
