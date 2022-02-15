import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setDateSortKey } from "../templatesDateSort";
import { setTemplatesCategory } from "../templatesCategory";
import { SortKey } from "../../../lib/types";


const templatesAlphabeticOrderSortSlice = createSlice({
    name:         "templatesAlphabeticOrderSort",
    initialState: { key: SortKey.Default },
    reducers:     {
        setAlphabeticOrderSortKey: (state, action: PayloadAction<SortKey>) => {
            state.key = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(setDateSortKey, (state, action) => {
            if (action.payload !== SortKey.Default) {
                state.key = SortKey.Default
            }
        }),
        builder.addCase(setTemplatesCategory, state => {
            state.key = SortKey.Default
        })
    },
})

export const { setAlphabeticOrderSortKey } = templatesAlphabeticOrderSortSlice.actions
export default templatesAlphabeticOrderSortSlice.reducer
