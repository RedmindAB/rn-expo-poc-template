import { StyleSheet, ViewStyle } from 'react-native'

interface IStyles {
  container: ViewStyle
  circle: ViewStyle
  circleOne: ViewStyle
  circleTwo: ViewStyle
  circleThree: ViewStyle
}

const CIRCLE_ONE_SIZE = 400
const CIRCLE_TWO_SIZE = 600
const CIRCLE_THREE_SIZE = 800

const styles = StyleSheet.create<IStyles>({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    position: 'absolute',
    opacity: 0.5
  },
  circleOne: {
    height: CIRCLE_ONE_SIZE,
    width: CIRCLE_ONE_SIZE,
    borderRadius: CIRCLE_ONE_SIZE / 2,
    backgroundColor: 'rgb(255, 236, 158)',
    zIndex: 3
  },
  circleTwo: {
    height: CIRCLE_TWO_SIZE,
    width: CIRCLE_TWO_SIZE,
    borderRadius: CIRCLE_TWO_SIZE / 2,
    backgroundColor: 'rgb(255, 243, 195)',
    zIndex: 2
  },
  circleThree: {
    height: CIRCLE_THREE_SIZE,
    width: CIRCLE_THREE_SIZE,
    borderRadius: CIRCLE_THREE_SIZE / 2,
    backgroundColor: 'rgb(255, 248, 221)',
    zIndex: 1
  }
})

export default styles
