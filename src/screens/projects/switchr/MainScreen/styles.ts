import { StyleSheet, ViewStyle, ImageStyle } from 'react-native'
import layout from '../../constants/layout'
import variables from '../../constants/variables'

interface IStyles {
  container: ViewStyle
  screenContainer: ViewStyle
  screenScrollView: ViewStyle
  screen: ViewStyle
  energyWaves: ImageStyle
}

const styles = StyleSheet.create<IStyles>({
  container: {},
  screenContainer: {
    flexDirection: 'row',
    width: layout.width * 3,
    maxHeight: layout.height - 70
  },
  screen: {
    width: layout.width
  },
  energyWaves: {
    position: 'absolute',
    bottom: 60
  },
  screenScrollView: {
    paddingVertical: variables.spacing * 2
  }
})

export default styles
