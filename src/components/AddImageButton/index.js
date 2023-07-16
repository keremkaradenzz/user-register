import React from 'react'
import { styles } from './styles'
import { Pressable, Text } from 'react-native'

const AddImageButton = props => {
  const { children, onPress } = props
  return (
    <Pressable onPress={onPress} style={styles.buttonWrapper}>
      <Text style={styles.text}>Add Image</Text>
    </Pressable>
  )
}

export default AddImageButton
