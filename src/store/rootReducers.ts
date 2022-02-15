import { combineReducers } from "@reduxjs/toolkit";
import allTemplates from "./slices/allTemplates"
import templateAlphabeticOrderSort from "./slices/templateAlphabeticOrderSort";
import templatesCategory from "./slices/templatesCategory";
import templatesDateSort from "./slices/templatesDateSort";
import templateSearch from "./slices/templateSearch";
import templatesPagination from "./slices/templatesPagination";

const rootReducer = combineReducers({
    allTemplates,
    templatesPagination,
    templatesCategory,
    templateSearch,
    templatesDateSort,
    templateAlphabeticOrderSort,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
