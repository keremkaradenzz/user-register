import React, { useState } from 'react'
import { ScrollView, Text, View, SafeAreaView } from 'react-native'
import { globalContainer } from '../../../assets/theme/styles'
import SelectInput from '../../../components/SelectInput'
import { EDUCATION_LEVEL_DATA, WORK_DATA } from '../../../mocks/data'
import { styles } from './styles'
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Button'
import { Formik } from 'formik'
import RNDatePicker from '../../../components/DatePicker'
import { registerRoute } from '../../../utils/constants/routeConstant'
import { useDispatch } from 'react-redux'
import { setUserValue } from '../../../store/slices/registerSlice'

const StepTwo = ({ navigation }) => {
  const dispatch = useDispatch()

  const onSubmit = values => {
    dispatch(setUserValue(JSON.parse(JSON.stringify(values))))
    navigation.navigate(registerRoute.stepThree)
  }
  return (
    <SafeAreaView style={{ minHeight: '100%', backgroundColor: '#fff' }}>
      <Formik
        initialValues={{
          workStatus: '',
          jobName: '',
          educationLevel: '',
          schoolName: '',
          schoolPart: '',
          graduation: new Date(),
          competenceDegree: ''
        }}
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
          setFieldValue,
          isValid
        }) => (
          <View style={styles.container}>
            <Text style={styles.text}>Work Info</Text>
            <SelectInput
              placeholder= 'Select your work status'
              label='Work Status'
              data={WORK_DATA}
              value={values.workStatus}
              onChange={item => {
                setFieldValue('workStatus', item.value)
              }}
            />
            <TextInput
              errors={errors}
              label='Job Name'
              name='jobName'
              setFieldTouched={setFieldTouched}
              onChange={handleChange('jobName')}
              touched={touched}
              value={values.jobName}
              onBlur={handleBlur}
            />
            <Text style={styles.text}>Education Info</Text>
            <SelectInput
              placeholder= 'Select your education level'
              label='Education level'
              data={EDUCATION_LEVEL_DATA}
              value={values.educationLevel}
              onChange={item => {
                setFieldValue('educationLevel', item.value)
              }}
            />
            <TextInput
              errors={errors}
              label='School Name '
              name='schoolName'
              setFieldTouched={setFieldTouched}
              onChange={handleChange('schoolName')}
              touched={touched}
              value={values.schoolName}
              onBlur={handleBlur}
            />
            <TextInput
              errors={errors}
              label='School Part'
              name='schoolPart'
              setFieldTouched={setFieldTouched}
              onChange={handleChange('schoolPart')}
              touched={touched}
              value={values.schoolPart}
              onBlur={handleBlur}
            />

            <RNDatePicker
              errors={errors}
              label='Graduation Year'
              name='graduation'
              setFieldTouched={setFieldTouched}
              onChange={(e, date) => setFieldValue('graduation', date)}
              touched={touched}
              value={values.graduation}
              onBlur={handleBlur}
            />
            <TextInput
              multiline={true}
              errors={errors}
              label='Competence Degrees'
              name='competenceDegree'
              setFieldTouched={setFieldTouched}
              onChange={handleChange('competenceDegree')}
              touched={touched}
              value={values.competenceDegree}
              onBlur={handleBlur}
            />
            <Button
              options={{
                buttonStyle: {
                  backgroundColor: 'black'
                }
              }}
              color='#fff'
              disabled={!isValid}
              label='Next'
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  )
}

export default StepTwo
