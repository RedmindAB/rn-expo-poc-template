import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

interface IStyles {
  container: ViewStyle
  quickInformation: ViewStyle
  cardContainer: ViewStyle
  cardTitle: TextStyle
  cardContentContainer: ViewStyle
}

const styles = StyleSheet.create<IStyles>({
  container: {},
  quickInformation: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  cardContainer: {
    alignItems: 'center'
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 16,
    color: 'white'
  },
  cardContentContainer: {
    justifyContent: 'space-around'
  }
})

export default styles
