import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: '',
    email: '',
    role: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState
})

export default authSlice.reducer