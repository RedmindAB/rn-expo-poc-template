import React from 'react'
import { Image, StyleProp, ImageStyle } from 'react-native'

export const icons = {
  solarPanelWithSun: require('./icon.png'),
  solarPanelWithSunLarge: require('./iconLarge.png'),
  solarPanel: require('./iconPanel.png'),
  notificationBell: require('./iconNotification.png'),
  home: require('./iconHome.png'),
  statistics: require('./iconStatistics.old.png'),
  profile: require('./iconProfile.png'),
  energyWaves: require('./energyWaves.png'),
  flowerPot: require('./iconCopy.png')
}

type IconModel =
  | 'solarPanel'
  | 'solarPanelWithSun'
  | 'notificationBell'
  | 'home'
  | 'statistics'
  | 'profile'
  | 'energyWaves'
  | 'flowerPot'
  | 'solarPanelWithSunLarge'

export default ({
  icon,
  style = {},
  ...props
}: {
  icon: IconModel
  style?: StyleProp<ImageStyle>
}) => <Image source={icons[icon]} style={style} {...props} />
