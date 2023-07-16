import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { registerRoute } from '../utils/constants/routeConstant'
import StepOne from '../screens/Register/StepOne'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import StepTwo from '../screens/Register/StepTwo'
import StepThree from '../screens/Register/StepThree'
import { styles } from './styles'
import { IconLeftArrow } from '../assets/icons'
import { screenRoute } from '../utils/constants/routeConstant'
import { navigateRoot } from './rootNavigationRef'
const Stack = createNativeStackNavigator()

export default function RegisterNavigationContainer () {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName={registerRoute.stepOne}>
        <Stack.Screen
          name={registerRoute.stepOne}
          component={StepOne}
          options={{
            headerShown: true,
            headerLeft: () => {
              return (
                <>
                  <TouchableOpacity
                    style={styles.buttonWrapper}
                    onPress={() => navigateRoot(screenRoute.login)}
                  >
                    <IconLeftArrow />
                    <Text style={styles.backArrowText}>Home</Text>
                  </TouchableOpacity>
                </>
              )
            }
          }}
        />
        <Stack.Screen
          name={registerRoute.stepTwo}
          component={StepTwo}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name={registerRoute.stepThree}
          component={StepThree}
          options={{
            headerShown: true
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
