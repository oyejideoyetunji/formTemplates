import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
})



export const { setPageSize, setCurrentPageIndex } = templatesPaginationSlice.actions
export default templatesPaginationSlice.reducer
