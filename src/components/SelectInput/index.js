import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import DropDownPicker from 'react-native-dropdown-picker'

const SelectInput = props => {
  const [open, setOpen] = useState(false)
  const { value, onChange, data, label, placeholder } = props
  return (
    <View style={styles.container}>
      {label && <Text style = {styles.label}>{label}</Text>}
      <DropDownPicker
        placeholder={placeholder}
        style = { styles.dropdown}
        open={open}
        value={value}
        items={data}
        onSelectItem={onChange}
        setOpen={setOpen}
      />
    </View>
  )
}

export default SelectInput
