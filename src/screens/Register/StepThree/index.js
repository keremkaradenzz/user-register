import React, { useCallback, useState } from 'react'
import {
  Alert,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  View
} from 'react-native'
import DocumentPicker, {
  types,
  isCancel,
  isInProgress
} from 'react-native-document-picker'
import Button from '../../../components/Button'
import { globalContainer } from '../../../assets/theme/styles'
import { styles } from './styles'
import { Formik } from 'formik'
import TextInput from '../../../components/TextInput'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { screenRoute } from '../../../utils/constants/routeConstant'
import { navigateRoot } from '../../../navigation/rootNavigationRef'
import { IconPlus } from '../../../assets/icons'

const StepThree = () => {
  const initProjectsData = { projectName: '' }
  const [result, setResult] = useState(null)
  const state = useSelector(state => state.register)

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [types.pdf]
      })
      setResult(response)
    } catch (err) {
      console.warn(err)
    }
  }, [])

  const onSubmit = async values => {
    const userData = {
      ...state.values,
      cv: result,
      ...values
    }
    try {
      let usersArr = JSON.parse(await AsyncStorage.getItem('usersProfile'))
      if (usersArr !== null) {
        usersArr.push(userData)
      } else {
        usersArr = [userData]
      }
      await AsyncStorage.setItem('usersProfile', JSON.stringify(usersArr))
      Alert.alert('Succesfully!')
      navigateRoot(screenRoute.login)
    } catch (error) {
      console.error('error', error)
    }
  }

  return (
    <SafeAreaView
      style={globalContainer({
        minHeight: '100%',
        justifyContent: 'flex-start'
      })}
    >
      <View style={styles.container}>
        <Button
          iconRight={<IconPlus />}
          label='Add CV * (only pdf)'
          onPress={handleDocumentSelection}
        />
        <Text style={styles.pdfName}>{result?.[0]?.name}</Text>
      </View>
      <Text>Projects</Text>

      <Formik
        initialValues={{
          projects: [initProjectsData]
        }}
        onSubmit={onSubmit}
      >
        {({
          handleSubmit,
          values,
          errors,
          setFieldTouched,
          handleBlur,
          touched,
          setFieldValue,
          isValid
        }) => (
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'column',
              width: '100%',
              alignItems: 'center'
            }}
          >
            <ScrollView
              style={{
                width: '100%',
                marginTop: 20,
                height: Dimensions.get('screen').height / 1.8
              }}
            >
              <View style={styles.wrapper}>
                <View style={[styles.row, { marginBottom: 20 }]}>
                  <Button
                    label='Add new a project'
                    onPress={() =>
                      setFieldValue('projects', [
                        ...values.projects,
                        initProjectsData
                      ])
                    }
                  />
                </View>
                {values.projects &&
                  values.projects?.map((project, i) => (
                    <View style={styles.row} key={i}>
                      <TextInput
                        multiline={true}
                        errors={errors}
                        label={`${i + 1}.Project Name`}
                        name='projects[i].projectName'
                        setFieldTouched={setFieldTouched}
                        onChange={e => {
                          setFieldValue(`projects.${i}.projectName`, e)
                        }}
                        touched={touched}
                        value={project.projectName}
                        onBlur={handleBlur}
                      />

                      <Button
                        options={{
                          buttonStyle: {
                            borderColor: 'red'
                          }
                        }}
                        label='Delete'
                        color='red'
                        onPress={() =>
                          setFieldValue(
                            'projects',
                            values.projects.filter((_, idx) => idx !== i)
                          )
                        }
                      />
                    </View>
                  ))}
              </View>
            </ScrollView>
            <Button
              options={{
                buttonStyle: {
                  marginTop: 30,
                  width: '90%',
                  backgroundColor: 'black'
                }
              }}
              color='#fff'
              label='Register'
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  )
}

export default StepThree
