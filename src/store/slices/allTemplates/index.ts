import { AllTemplatesState } from "../../../lib/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTemplates } from "../../../request";
import { filterTemplatesByCategory } from "../../../lib/utils/filter/templates";
import { getTemplates } from "../../../request/urls";
import { setAlphabeticOrderSortKey } from "../templateAlphabeticOrderSort";
import { setDateSortKey } from "../templatesDateSort";
import { setTemplatesCategory } from "../templatesCategory";
import { sortTemplatesByDate, sortTemplatesByName } from "../../../lib/utils/sort/templates";



export const fetchAllTemplates = createAsyncThunk(
    "templates/fetchAll",
    async() => {
        try {
            const { status, data } = await fetchTemplates({ urn: getTemplates })
            const successCode = 200;

            if (status !== successCode) {
                return { error: "", data: [] }
            } else if (status === successCode) {
                return { error: "", data }
            }
        } catch (e) {
            return { error: "", data: [] }
        }
    },
)


const allTemplatesSlice = createSlice({
    name:         "templates",
    initialState: <AllTemplatesState>{
        templates:            [],
        categorisedTemplates: [],
        fetchingTemplates:    false,
        fetchTemplatesError:  "",
    },
    reducers:      {},
    extraReducers: builder => {
        builder.addCase(fetchAllTemplates.pending, state => {
            state.fetchingTemplates = true
            state.fetchTemplatesError = ""
        })
        builder.addCase(fetchAllTemplates.fulfilled, (state, action) => {
            state.fetchingTemplates = false
            state.templates = action.payload?.data
            state.categorisedTemplates = action.payload?.data
        })
        builder.addCase(fetchAllTemplates.rejected, state => {
            state.fetchingTemplates = false
            state.templates = []
            state.fetchTemplatesError =
                "Opps! an error occured while trying to load templates please try again."

        })
        builder.addCase(setTemplatesCategory, (state, action) => {
            state.categorisedTemplates = filterTemplatesByCategory({
                list:     state.templates,
                category: action.payload,
            })
        })
        builder.addCase(setAlphabeticOrderSortKey, (state, action) => {
            state.categorisedTemplates = sortTemplatesByName({
                list: state.categorisedTemplates,
                key:  action.payload,
            })
        })
        builder.addCase(setDateSortKey, (state, action) => {
            state.categorisedTemplates = sortTemplatesByDate({
                list: state.categorisedTemplates,
                key:  action.payload,
            })
        })
    },

})

export default allTemplatesSlice.reducer
