import { StyleSheet, ViewStyle, TextStyle, ImageStyle, Platform } from 'react-native'
import colors from '../../constants/colors'
import variables from '../../constants/variables'

interface IStyles {
  container: ViewStyle
  title: TextStyle
  iconContainer: ViewStyle
  icon: ImageStyle
  panelAmount: TextStyle
}

const styles = StyleSheet.create<IStyles>({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: colors.black,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: variables.spacing
  },
  iconContainer: {
    width: 84,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  icon: {
    opacity: 0.5
  },
  panelAmount: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 28,
    textAlign: 'center'
  }
})

export default styles
