import { createSlice } from "@reduxjs/toolkit";


export const devSlice = createSlice({
    name: "dev",
    initialState: {
        devs: []
    },
    reducers: {
        setDevs(state, action) {
            state.devs = action.payload
        },
        getDevs(state){
            return state.devs
        }
    }
})

export const {setDevs, getDevs} = devSlice.actions
export default devSlice.reducer
