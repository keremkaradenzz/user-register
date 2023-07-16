import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

const RadioButton = (props) => {
    const { label, onChange, checked} = props

  return (
    <TouchableOpacity onPress={onChange}>
      <View style={styles.container}>
        <View style={styles.radio(checked)}>
            <View style={styles.radioChild(checked)}/>
            </View>
        {label && <Text>{label}</Text>}
      </View>
    </TouchableOpacity>
  )
}

export default RadioButton
