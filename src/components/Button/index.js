import React from 'react'
import { Text, TouchableOpacity, Button as RNButton } from 'react-native'
import { styles } from './styles'
import { View } from 'react-native'

const Button = props => {
  const { onPress, label, options, disabled = false, color = 'black', iconRight } = props

  return (
    <View style={[styles.buttonWrapper(disabled), options?.buttonStyle]}>
      {iconRight && iconRight} 
      <RNButton
        accessibilityLabel={label}
        style={[styles.labelStyle(disabled), options?.labelStyle]}
        title={label}
        onPress={onPress}
        color={color}
        disabled={disabled}
      />
    </View>
  )
}

export default Button
