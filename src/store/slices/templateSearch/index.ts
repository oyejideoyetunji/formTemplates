import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setTemplatesCategory } from "../templatesCategory";


const templateSearchSlice = createSlice({
    name:         "templateSearch",
    initialState: { searchValue: "" },
    reducers:     {
        setTemplatesSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(setTemplatesCategory, state => {
            state.searchValue = ""
        })
    },
})


export const { setTemplatesSearchValue } = templateSearchSlice.actions
export default templateSearchSlice.reducer
