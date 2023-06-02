
import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';


const store = configureStore({
    reducer: {
        // register: myFormReducer,
        form: formReducer
    },
});

export default store;