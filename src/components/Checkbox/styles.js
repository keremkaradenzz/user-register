import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({ 
     container: { 
        alignItems: 'center',
        flexDirection: 'row'
     },

     checkbox : (checked) => { 
        return {
            justifyContent: 'center',
            alignItems: 'center',
            margin: 2, 
            marginRight: 5,
            borderColor: checked ? 'blue' : 'gray',
            borderWidth: 1,
            borderRadius: 4,
            width: 24,
            height: 24
        }
     },

     checkboxChild : (checked) => { 
        return {
            backgroundColor: checked ? 'blue' : '#fff',
            margin: 2, 
            borderRadius: 16,
            width: 16,
            height: 16
        }
     },
     
    errorText: {
      fontSize: 10,
      marginBottom: -5,
      marginTop: -10,
      marginLeft: 10,
      color: 'red',
    },
})