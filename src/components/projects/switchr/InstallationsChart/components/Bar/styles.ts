import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import colors from '../../../../constants/colors'

interface IStyles {
  container: ViewStyle
  value: TextStyle
}

const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: colors.orange,
    borderRadius: 10,
    width: 18
  },
  value: {
    textAlign: 'center',
    marginBottom: 4,
    color: colors.white
  }
})

export default styles
