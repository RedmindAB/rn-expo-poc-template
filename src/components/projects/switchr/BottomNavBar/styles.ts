import { StyleSheet, ViewStyle, ImageStyle, TextStyle, Platform } from 'react-native'
import colors from '../../constants/colors'
import variables from '../../constants/variables'

interface IStyles {
  container: ViewStyle
  navigationContainer: ViewStyle
  icon: ImageStyle
  activeIcon: ImageStyle
  text: TextStyle
  activeText: TextStyle
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: Platform.select({
      ios: 0,
      android: variables.spacing
    }),
    left: 0,
    right: 0
  },
  icon: {
    tintColor: colors.gray
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 10,
    marginTop: 2
  },
  navigationContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeIcon: {
    tintColor: colors.red
  },
  activeText: {
    color: colors.red
  }
})

export default styles
