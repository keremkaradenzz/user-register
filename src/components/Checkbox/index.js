import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { IconCheck } from '../../assets/icons'
const Checkbox = props => {
  const { label, onChange, checked, errors, name } = props

  const hasError = errors?.[name]
  return (
    <>
      <TouchableOpacity onPress={onChange}>
        <View style={styles.container}>
          <View style={styles.checkbox(checked)}>
            {checked && <IconCheck />}
          </View>
          {label && <Text>{label}</Text>}
        </View>
      </TouchableOpacity>
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  )
}

export default Checkbox
