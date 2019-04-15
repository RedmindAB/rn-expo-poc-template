import { StyleSheet, ViewStyle, ImageStyle } from 'react-native'

interface IStyles {
  container: ViewStyle
  overlay: ViewStyle
  background: ImageStyle
}

const styles = StyleSheet.create<IStyles>({
  container: {},
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(255,180,65,0.5)'
  }
})

export default styles
