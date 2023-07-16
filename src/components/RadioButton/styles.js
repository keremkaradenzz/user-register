import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({ 
     container: { 
        alignItems: 'center',
        flexDirection: 'row'
     },

     radio : (checked) => { 
        return {
            justifyContent: 'center',
            alignItems: 'center',
            margin: 2, 
            marginRight: 5,
            borderColor: checked ? 'blue' : 'gray',
            borderWidth: 1,
            borderRadius: 16,
            width: 24,
            height: 24
        }
     },

     radioChild : (checked) => { 
        return {
            backgroundColor: checked ? 'blue' : '#fff',
            margin: 2, 
            borderRadius: 16,
            width: 16,
            height: 16
        }
     }
})