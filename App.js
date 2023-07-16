import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/screens/Login'
import { mainRoute, screenRoute } from './src/utils/constants/routeConstant'
import RegisterNavigationContainer from './src/navigation/RegisterNavigationContainer'
import { rootNavigationRef } from './src/navigation/rootNavigationRef'
import HomeDrawerNavigation from './src/navigation/HomeDrawerNavigation'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <NavigationContainer independent={true} ref={rootNavigationRef}>
      <Stack.Navigator initialRouteName={screenRoute.login}>
        <Stack.Screen
          name={screenRoute.login}
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name={screenRoute.register}
          component={RegisterNavigationContainer}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name={screenRoute.home}
          options={{
            headerBackButton: null,
            headerShown: false
          }}
          component={HomeDrawerNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
