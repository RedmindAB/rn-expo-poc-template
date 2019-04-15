import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import colors from '../../constants/colors'
import variables from '../../constants/variables'

interface IStyles {
  container: ViewStyle
  timeSpanContainer: ViewStyle
  timeSpanContainerActive: ViewStyle
  timeSpanText: TextStyle
  timeSpanTextActive: TextStyle
}

const BORDER_RADIUS = 16

const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginHorizontal: variables.spacing,
    padding: 4,
    borderRadius: BORDER_RADIUS
  },
  timeSpanContainer: {
    width: '100%',
    borderRadius: BORDER_RADIUS,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'transparent'
  },
  timeSpanContainerActive: {
    backgroundColor: colors.yellow
  },
  timeSpanText: {
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    color: colors.black
  },
  timeSpanTextActive: {
    fontFamily: 'Montserrat-Bold'
  }
})

export default styles
