import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textInputWrapper: (isError) => {
        return {
            position: 'relative',
            borderColor: isError ? 'red' : 'gray',
            borderWidth: 1,
            borderRadius: 10,
            width: '100%',
        }
    },

    textInput: (isError) => {
        return {
            color: isError ? 'red' : 'black',
            paddingVertical: 15,
            paddingHorizontal: 10,
        }
    }, 

    label: (isError) => {
        return {
            position: 'absolute',
            color: isError ? 'red' : 'black',
            paddingHorizontal: 10,
            top: -7,
            left: 15,
            backgroundColor: '#fff'
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