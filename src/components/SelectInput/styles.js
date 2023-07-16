import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { 
        position: 'relative',
        zIndex: 999,
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

    dropdown: { 
        borderWidth: 0.5
    }
})