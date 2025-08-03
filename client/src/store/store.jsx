import { configureStore
 } from "@reduxjs/toolkit";

import authReducer from './reducers/auth';
import journalReducer from './reducers/journal';

const store = configureStore({
    reducer: {
        auth: authReducer,
        journal: journalReducer,
    },

})

export default store;