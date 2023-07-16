import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: { 
        marginTop: 20,
        width: '100%',
        rowGap: 20
    }, 
    row: { 
        flexDirection: 'row',
        width: '100%',
    }, 
    wrapper: { 
        width: '100%',  
        paddingHorizontal: 20,
        marginTop: 20
    },
    imageRow: { 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})