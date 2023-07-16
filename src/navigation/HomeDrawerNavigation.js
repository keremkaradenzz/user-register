import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Text, TouchableOpacity, View } from 'react-native'
import HomeBottomNavigation from './HomeBottomNavigation'
import { mainRoute, screenRoute } from '../utils/constants/routeConstant'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { navigateRoot } from './rootNavigationRef'

const Drawer = createDrawerNavigator()

export default function HomeDrawerNavigation () {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name={'Home'}
        component={HomeBottomNavigation}
        options={{
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  )
}

const DrawerContent = ({ navigation }) => {
  const handleNavigate = name => {
    navigation.navigate(name)
  }
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => handleNavigate(mainRoute.dashboard)}>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => handleNavigate(mainRoute.profile)}>
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => navigateRoot(screenRoute.login)}>
          <Text style={styles.text}>Exit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
