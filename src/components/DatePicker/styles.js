import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 10,
    alignItems: 'flex-start'
  },

  label: {
    position: 'absolute',
    color: 'black',
    top: -10,
    zIndex: 999999,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    left: 15
  },

  picker: {
    paddingVertical: 8
  },
  datePickerStyle: {
    marginLeft: 12,
    paddingVertical:3,
  }
})
