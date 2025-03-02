import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

const getInitialState = () => {
    const maxCounter = localStorage.getItem('maxCounter');
    const minCounter = localStorage.getItem('minCounter');
    return {
        maxCounter: maxCounter ? Number(maxCounter) : 10, // Дефолтное значение 10
        minCounter: minCounter ? Number(minCounter) : 0,  // Дефолтное значение 0
        counter: minCounter ? Number(minCounter) : 0,    // Устанавливаем текущее значение как min
        error: null as string | null,
    };
};
export const counterSlice = createSlice({
    name: 'counter',
    initialState: getInitialState(),
    reducers: {
        increment: (state) => {
            if (state.counter !== state.maxCounter) {
                state.counter += 1
            }
        },
        reset: (state) => {
            state.counter = state.minCounter
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
        },
        installCounter: (state, action: PayloadAction<{ min: number, max: number }>) => {

            return {
                ...state, minCounter: action.payload.min, maxCounter: action.payload.max, counter:
                action.payload.min
            }



        }
    }
    ,
    selectors: {
        counterSelector: state => state.counter,
        maxSelector: state => state.maxCounter,
        minSelector: state => state.minCounter,
        errorSelector: state => state.error,
    }
})
export const counterReducer = counterSlice.reducer
export const {increment, reset, setError, installCounter} = counterSlice.actions
export const {counterSelector, errorSelector, minSelector, maxSelector} = counterSlice.selectors