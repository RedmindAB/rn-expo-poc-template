import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import colors from '../../../../../constants/colors'
import variables from '../../../../../constants/variables'

interface IStyles {
  title: TextStyle
}

const styles = StyleSheet.create<IStyles>({
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 28,
    color: colors.black,
    marginBottom: variables.spacing * 2
  }
})

export default styles
