import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setAlphabeticOrderSortKey } from "../templateAlphabeticOrderSort";
import { setTemplatesCategory } from "../templatesCategory";
import { SortKey } from "../../../lib/types";


const templatesDateSortSlice = createSlice({
    name:         "templatesDateSort",
    initialState: { key: SortKey.Default },
    reducers:     {
        setDateSortKey: (state, action: PayloadAction<SortKey>) => {
            state.key = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(setAlphabeticOrderSortKey, (state, action) => {
            if (action.payload !== SortKey.Default) {
                state.key = SortKey.Default
            }
        })
        builder.addCase(setTemplatesCategory, state => {
            state.key = SortKey.Default
        })
    },
})


export const { setDateSortKey } = templatesDateSortSlice.actions
export default templatesDateSortSlice.reducer
