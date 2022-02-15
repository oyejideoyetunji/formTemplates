import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import rootReducer, { RootState } from "./rootReducers";


const store = configureStore({
    reducer:    rootReducer,
    middleware: getDefaultMiddleware => {
        const [thunk, immutableStateInvariant] = getDefaultMiddleware()
        return [thunk, immutableStateInvariant]
    },
})
type AppDispatch = typeof store.dispatch


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
