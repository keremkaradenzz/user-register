import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextInput from '../../components/TextInput'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { globalContainer } from '../../assets/theme/styles'
import { Formik, useFormik } from 'formik'
import { styles } from './style'
import Button from '../../components/Button'
import * as yup from 'yup'
import { mainRoute, screenRoute } from '../../utils/constants/routeConstant'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'

const Login = ({ navigation, route }) => {
  const [users, setUsers] = useState([])
  const formik = useFormik({
    initialValues: {
      id: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const loginValidationSchema = yup.object().shape({
    id: yup
      .string()
      .min(8, ({ min }) => `Identifier must be at least ${min} characters`)
      .required('Identifier is required')
  })
  useFocusEffect(
    useCallback(() => {
      ;(async () => {
        formik.setErrors(null)
        try {
          const usersArr = JSON.parse(
            await AsyncStorage.getItem('usersProfile')
          )
          if (Array.isArray(usersArr)) {
            setUsers(usersArr)
          }
        } catch (error) {
          console.error(error)
        }
      })()
    }, [navigation.navigate])
  )

  const onSubmit = async (values, { resetForm }) => {
    let findUsers = users.find(item => item.id === values.id)
    if (findUsers) {
      try {
        await AsyncStorage.setItem('id', JSON.stringify(values.id))
        resetForm()
        navigation.navigate(screenRoute.home)
      } catch (e) {
        console.error(e)
      }
    } else {
      Alert.alert('User Not Found !')
    }
    resetForm()
  }

  const onNavigateRegister = resetForm => {
    resetForm()
    navigation.navigate(screenRoute.register)
  }
  return (
    <SafeAreaView
      style={globalContainer({
        minHeight: '100%',
        flexDirection: 'column'
      })}
    >
      <Text style={styles.title}>Welcome to Register App !</Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={formik.initialValues}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          setFieldTouched,
          handleBlur,
          touched,
          resetForm
        }) => (
          <View style={styles.loginWrapper}>
            <TextInput
              errors={errors}
              label='Identifier'
              name='id'
              touched={touched}
              onChange={handleChange('id')}
              value={values.id}
            />
            <Button
              options={{
                buttonStyle: {
                  marginTop: 10
                }
              }}
              label='Login'
              onPress={handleSubmit}
            />
            <Button
              options={{
                buttonStyle: {
                  width: '100%',
                  backgroundColor: 'black'
                }
              }}
              color='#fff'
              label='Register'
              onPress={() => onNavigateRegister(resetForm)}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  )
}

export default Login
