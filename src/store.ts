import { configureStore } from "@reduxjs/toolkit";
import counter from "./container/counter/slice";
import cart from "./container/cart/slice";

export const store = configureStore({
    reducer: {
        counter,
        cart,
        // ...всі інші редьюсери підключаються
    },
    // middleware: [...] //тут можна підключити додаткові технології, які працюють разом з redux (рідко використовується)
})

//задаємо типізацію для глобального state та dispatch функції
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store