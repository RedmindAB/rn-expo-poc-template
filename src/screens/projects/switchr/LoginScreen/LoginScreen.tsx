import React, { Component } from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'

import styles from './styles'
import SwitchrLogo from '../../assets/svg/SwitchrLogo'
import Container from '../../components/common/Container'
import { NavigationScreenOptions, NavigationScreenProps } from 'react-navigation'
import defaultStyles from '../../constants/defaultStyles'
import variables from '../../constants/variables'
import Button from '../../components/common/Button'
import colors from '../../constants/colors'

type OwnProps = {}

type Props = OwnProps & NavigationScreenProps

class LoginScreen extends Component<Props> {
  navigation = this.props.navigation

  static navigationOptions: NavigationScreenOptions = {
    header: null
  }

  onPressDemo = () => this.navigation.navigate('Main')

  render() {
    return (
      <Container>
        <Image
          source={{
            uri: 'https://switchr.global/static/build/images/2a21c55ed6e77ab85f4d0ad32c4e2f01.jpg'
          }}
          resizeMode="cover"
          style={styles.background}
        />
        <View style={styles.overlay} />
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <SwitchrLogo
            style={{ height: 50, width: 200, transform: [{ translateY: variables.spacing * 2 }] }}
          />
          <Text
            style={[
              defaultStyles.lightText,
              {
                textAlign: 'center',
                fontSize: 18
              }
            ]}
          >
            DEMO
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: variables.spacing * 3
            }}
          >
            <View style={{ height: 2, width: 64, backgroundColor: colors.white }} />
            <View
              style={{
                height: 8,
                width: 8,
                marginHorizontal: 8,
                backgroundColor: colors.white,
                borderRadius: 4
              }}
            />
            <View style={{ height: 2, width: 64, backgroundColor: colors.white }} />
          </View>
          <Button title="Go to demo" onPress={this.onPressDemo} />
        </SafeAreaView>
      </Container>
    )
  }
}

export default LoginScreen
