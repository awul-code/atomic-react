import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import breadcrumbSlice from "./slices/breadcrumbSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        breadcrumb: breadcrumbSlice
    }
})

console.log("on create store:", store.getState());

store.subscribe(() => {
    console.log("STORE CHANGE:", store.getState());
});

export default store


