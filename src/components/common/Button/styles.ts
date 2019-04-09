import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

import colors from '../../../constants/colors'

interface IStyles {
  container: ViewStyle
  text: TextStyle
}

const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: colors.indicator
  },
  text: {
    color: colors.indicatorText,
    textTransform: 'uppercase'
  }
})

export default styles
