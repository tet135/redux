import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {value: number}

export const initialState: CounterState = {value: 1} 

export const conterSlice = createSlice({
    name: "couner",
    initialState,
    reducers: {
        increment: (state) => {
            (state.value += 1)
        },

        decrement: (state) => {
            if (state.value > 0) {state.value -= 1}
        },

        incrementByAmount: (state, action: PayloadAction<{value: number}>) => {
            state.value += action.payload.value
        },
    }
})

export const {increment, decrement, incrementByAmount} = conterSlice.actions;
export default conterSlice.reducer;