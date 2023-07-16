import React, { useCallback, useEffect, useState } from 'react'
import { globalContainer } from '../../../assets/theme/styles'
import { Image, Text, View, SafeAreaView, ScrollView } from 'react-native'
import AddImageButton from '../../../components/AddImageButton'
import * as ImagePicker from 'expo-image-picker'
import { styles } from './styles'
import { Formik, useFormik } from 'formik'
import TextInput from '../../../components/TextInput'
import { getRequest } from '../../../services/api'
import SelectInput from '../../../components/SelectInput'
import RNDatePicker from '../../../components/DatePicker'
import RadioButton from '../../../components/RadioButton'
import Checkbox from '../../../components/Checkbox'
import Button from '../../../components/Button'
import * as yup from 'yup'
import { registerRoute } from '../../../utils/constants/routeConstant'
import { useDispatch } from 'react-redux'
import { setUserValue } from '../../../store/slices/registerSlice'
import { ProfilePhoto } from '../../../assets/images'
const StepOne = ({ navigation }) => {
  const [image, setImage] = useState(null)
  const [countries, setCountries] = useState([])
  const dispatch = useDispatch()

  const stepOneValidationSchema = yup.object().shape({
    name: yup.string().required('Name is Required'),
    surname: yup.string().required('Surname is Required'),
    id: yup
      .string()
      .min(8, ({ min }) => `Identifier must be at least ${min} numbers`)
      .required('Identifier is Required'),
    kvkk: yup.bool().oneOf([true], 'You need to accept the terms and KVKK')
  })

  useEffect(() => {
    ;(async () => {
      const data = await getRequest('all?fields=name')
      const newData = data?.map(item => ({
        label: item.name.common,
        value: item.name.common.toLowerCase()
      }))
      setCountries(newData)
    })()
  }, [])

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })
    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const onSubmit = values => {
    const newValues = { 
      ...values,
      profilePhoto: image
    }
    dispatch(setUserValue(JSON.parse(JSON.stringify(newValues))))
    navigation.navigate(registerRoute.stepTwo)
  }

  return (
    <ScrollView
      style={{minHeight: '100%', backgroundColor: '#fff'}}
    >
      <View style={styles.wrapper}>
        <View style={styles.imageRow}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 80, height: 80, borderRadius: 50,marginBottom:20 }}
            />
          ) : (
            <ProfilePhoto style={{ width: 100, height: 100 }} />
          )}
          <AddImageButton onPress={pickImage} />
        </View>
        <Formik
          validationSchema={stepOneValidationSchema}
          initialValues={{
            name: '',
            surname: '',
            country: '',
            id: '',
            phone: '',
            birthDate: new Date(),
            sex: '',
            kvkk: false
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
            <View>
            <View style={styles.container}>
              <TextInput
                errors={errors}
                label='Name *'
                name='name'
                setFieldTouched={setFieldTouched}
                onChange={handleChange('name')}
                touched={touched}
                value={values.name}
                onBlur={handleBlur}
              />
              <TextInput
                errors={errors}
                label='Surname *'
                name='surname'
                setFieldTouched={setFieldTouched}
                onChange={handleChange('surname')}
                touched={touched}
                value={values.surname}
                onBlur={handleBlur}
              />
              <SelectInput
                placeholder = 'Select your country'
                label='Country'
                data={countries}
                value={values.country}
                onChange={item => {
                  setFieldValue('country', item.value)
                }}
              />
              <TextInput
                inputMode='numeric'
                errors={errors}
                label='Identifier *'
                name='id'
                setFieldTouched={setFieldTouched}
                onChange={handleChange('id')}
                touched={touched}
                value={values.id}
                onBlur={handleBlur}
              />
              <TextInput
                inputMode='tel'
                errors={errors}
                label='Phone'
                name='phone'
                setFieldTouched={setFieldTouched}
                onChange={handleChange('phone')}
                touched={touched}
                value={values.phone}
                onBlur={handleBlur}
              />

              <RNDatePicker
                errors={errors}
                label='Birth Date'
                name='birthDate'
                setFieldTouched={setFieldTouched}
                onChange={(e, date) => setFieldValue('birthDate', date)}
                touched={touched}
                value={values.birthDate}
                onBlur={handleBlur}
              />
              <View style={[styles.row, { columnGap: 20, justifyContent: 'space-between', width: '90%'}]}>
                <RadioButton
                  label='Male'
                  checked={values.sex === 'M'}
                  onChange={e => setFieldValue('sex', 'M')}
                />
                <RadioButton
                  label='Female'
                  checked={values.sex === 'F'}
                  onChange={() => setFieldValue('sex', 'F')}
                />
              </View>
              <Checkbox
                errors={errors}
                name='kvkk'
                label='KVKK *'
                checked={values.kvkk === true}
                onChange={() => setFieldValue('kvkk', !values.kvkk)}
              />
              </View>
              <Button
                options={{
                  buttonStyle: {
                    marginVertical: 20,
                    marginBottom: 50,
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
      </View>
    </ScrollView>
  )
}

export default StepOne
