import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../Redux/postsSlice';

const store = configureStore({
    reducer:{
        postReducer:postReducer
    }
});

export default store;