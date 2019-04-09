import { StyleSheet, ViewStyle } from 'react-native'

interface IStyles {
  container: ViewStyle
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1
  }
})

export default styles
