import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setTemplatesSearchValue } from "../templateSearch";
import { TemplatesPaginationState } from "../../../lib/types";



const templatesPaginationSlice = createSlice({
    name:         "templatePagination",
    initialState: <TemplatesPaginationState>{
        pageSize:         50,
        currentPageIndex: 0,
    },
    reducers: {
        setPageSize: (state, action: PayloadAction<number>) => {
            state.pageSize = action.payload
        },
        setCurrentPageIndex: (state, action: PayloadAction<number>) => {
            state.currentPageIndex = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(setTemplatesSearchValue, state => {
            state.currentPageIndex = 0
        })
    },
})



export const { setPageSize, setCurrentPageIndex } = templatesPaginationSlice.actions
export default templatesPaginationSlice.reducer
