

export const globalContainer = (props) => { 
    return { 
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: 'white',
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%',
        ...props
    }
}
