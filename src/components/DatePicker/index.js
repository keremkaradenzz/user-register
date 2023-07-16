import React, { useState } from 'react'
import { Button, Text, Touchable, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import DatePicker from 'react-native-datepicker'
const RNDatePicker = props => {
  const { value, onChange, label } = props

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <DatePicker
        style={styles.datePickerStyle}
        date={value} //initial date from state
        mode='date' //The enum of date, datetime and time
        placeholder='select date'
        format='DD-MM-YYYY'
        confirmBtnText='Confirm'
        cancelBtnText='Cancel'
        customStyles={{
          dateIcon: {
            //display: 'none',
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            borderColor: 'transparent',
            marginLeft: 36
          }
        }}
        onDateChange={onChange}
      />
    </View>
  )
}

export default RNDatePicker
