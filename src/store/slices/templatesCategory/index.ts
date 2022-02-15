import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TemplateCategory } from "../../../lib/types";



const templatesCategorySlice = createSlice({
    name:         "templatesCategory",
    initialState: { category: TemplateCategory.ALL },
    reducers:     {
        setTemplatesCategory: (state, action: PayloadAction<TemplateCategory>) => {
            state.category = action.payload
        },
    },
})

export const { setTemplatesCategory } = templatesCategorySlice.actions
export default templatesCategorySlice.reducer
