import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import colors from '../../constants/colors'
import layout from '../../constants/layout'
import variables from '../../constants/variables'

interface IStyles {
  container: ViewStyle
  gradient: ViewStyle
  barContainer: ViewStyle
  yearContainer: ViewStyle
  forecastContainer: ViewStyle
  title: TextStyle
  subtitle: TextStyle
  forecast: TextStyle
}

export const MAX_BAR_HEIGHT = layout.height * 0.3

const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: colors.red,
    marginHorizontal: variables.spacing,
    borderRadius: 18,
    padding: variables.spacing,
    paddingBottom: variables.spacing * 2
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 18
  },
  barContainer: {
    flexDirection: 'row',
    height: MAX_BAR_HEIGHT,
    alignItems: 'flex-end',
    justifyContent: 'space-evenly'
  },
  yearContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  title: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: colors.black,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 17,
    fontFamily: 'Montserrat-Regular',
    color: colors.dark,
    textAlign: 'center'
  },
  forecast: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: colors.white
  },
  forecastContainer: {
    marginTop: variables.spacing * 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: variables.spacing
  }
})

export default styles
