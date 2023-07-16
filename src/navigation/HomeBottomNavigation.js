import { mainRoute, registerRoute } from '../utils/constants/routeConstant'
import React from 'react'
import Dashboard from '../screens/Dashboard'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator()

export default function HomeBottomNavigation () {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={mainRoute.dashboard}
        component={Dashboard}
        options={{
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {
            fontSize: 14,
            marginBottom: 5
          },
          tabBarIcon: () => null
        }}
      />
      <Tab.Screen
        name={mainRoute.profile}
        component={Profile}
        options={{
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {
            fontSize: 14,
            marginBottom: 5
          },
          tabBarIcon: () => null
        }}
      />
    </Tab.Navigator>
  )
}
