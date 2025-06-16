import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
    id: number,
    name: string,
    amount: number
}

export interface CartState {
    list: CartItem[]; //масив об'єктів?
}

export const initialState: CartState  = {list: [{ id: 1111, name: "test product", amount: 1}]};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<{ name: string }> ) => {
            state.list.push({
                id: Math.floor(Math.random() * 10000),
                name: action.payload.name,
                amount: 1,
            });
        },

        changeAmount: (state, action: PayloadAction<{id: number, amount: number }>) => {
            const product = state.list.find((item) => item.id === action.payload.id) 
            if (product && action.payload.amount > 0) product.amount = action.payload.amount
            },

        deleteItem: (state, action: PayloadAction<{id: number}>) => {
            state.list = state.list.filter((item) => item.id !== action.payload.id)
        },
    }
})

export const {add, changeAmount, deleteItem} = cartSlice.actions;

export default cartSlice.reducer;