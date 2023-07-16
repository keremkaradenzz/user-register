import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  buttonWrapper: disabled => {
    return {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderWidth: 0.5,
      borderRadius: 10,
      backgroundColor: disabled ? 'gray' : '#ffff',
      justifyContent: 'center',
      alignItems:'center',
      flexDirection: 'row',
    }
  },

  labelStyle: disabled => {
    return {
      fontSize: 16,
      color: disabled ? '#fff' : 'black',
      textAlign: 'center'
    }
  }
})
