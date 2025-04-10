import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./AsyncSlice"

const Store=configureStore({
    reducer:{
        post:postSlice
    }
})
export default Store;