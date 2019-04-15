import { StyleSheet, ViewStyle } from 'react-native'
import layout from '../../constants/layout'
import colors from '../../constants/colors'

interface IStyles {
  container: ViewStyle
  contentContainer: ViewStyle
  shape: ViewStyle
}

const WIDTH = layout.width * 0.8
export const HEIGHT = 134

const styles = StyleSheet.create<IStyles>({
  container: {
    width: WIDTH,
    height: HEIGHT,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5
  },
  shape: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: colors.orange,
    transform: [{ skewX: '-20deg' }],
    borderRadius: 16,
    position: 'absolute'
  },
  contentContainer: {
    width: WIDTH * 0.9,
    height: HEIGHT * 0.8
  }
})

export default styles
