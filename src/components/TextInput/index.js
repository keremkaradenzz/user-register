import React from 'react'
import { TextInput as Input, View, Text } from 'react-native'
import { styles } from './styles'
const TextInput = props => {
  const {
    onBlur,
    onChange,
    name,
    value,
    errors,
    touched,
    setFieldTouched,
    label,
    inputMode = 'text',
    placeholder = '',
    multiline = false,
    ...inputProps
  } = props

  const hasError = errors?.[name] && touched?.[name]
  return (
    <>
      <View style={styles.textInputWrapper(hasError)}>
        {label && <Text style={styles.label(hasError)}>{label}</Text>}
        <Input
          multiline={multiline}
          style={[styles.textInput(hasError), multiline && { margin: 10, height: 60 }]}
          inputMode={inputMode}
          accessible={true}
          accessibilityLabel={name}
          disableFullscreenUI={true}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          onBlur={() => {
            if (setFieldTouched) {
              setFieldTouched(name)
            }
            if (onBlur) {
              onBlur(name)
            }
          }}
          {...inputProps}
        />
      </View>
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  )
}

export default TextInput
