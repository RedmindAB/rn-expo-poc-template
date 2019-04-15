import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import colors from '../../constants/colors'
import variables from '../../constants/variables'

interface IStyles {
  container: ViewStyle
  energyAmount: TextStyle
  energyMeasurement: TextStyle
  energyContainer: ViewStyle
  title: TextStyle
}

const styles = StyleSheet.create<IStyles>({
  container: {},
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    marginBottom: variables.spacing
  },
  energyContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  energyAmount: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 26
  },
  energyMeasurement: {
    fontFamily: 'Montserrat-Light',
    fontSize: 26
  }
})

export default styles
