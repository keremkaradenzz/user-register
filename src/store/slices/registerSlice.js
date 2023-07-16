import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  values: {
    name: '',
    surname: '',
    country: '',
    profilePhoto: '',
    id: '',
    phone: '',
    birthDate: '',
    sex: '',
    kvkk: false,
    workStatus: '',
    jobName: '',
    educationLevel: '',
    schoolName: '',
    schoolPart: '',
    graduation: '',
    competenceDegree: '',
    projects: []
  }
}

//State slice
export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setUserValue: (state, action) => {
      state.values = { ...state.values, ...action.payload }
    }
  }
})

// Action creators are automatically generated for each case reducer function
export const { setUserValue } = registerSlice.actions

export default registerSlice.reducer
