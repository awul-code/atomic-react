import { createAction, createReducer, configureStore } from '@reduxjs/toolkit'

const addToCart = createAction('ADD_TO_CART')
const login = createAction('CREATE_SESSION')
// reducer
const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload)
    })
})

// new reducer
const loginReducer = createReducer({ status: false }, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true
    })
})

// Store (Wadah utnuk menyimpan state)
const store = configureStore({
    reducer: {
        cart: cartReducer,
        login: loginReducer
    }
})
console.log("on create store:", store.getState());

// Subscribe (Untuk melihat perubahannya)
store.subscribe(() => {
    console.log("STORE CHANGE: ", store.getState());
})

// Dispatch
store.dispatch(login())
store.dispatch(addToCart({ id: 1, qty: 10 }))
store.dispatch(addToCart({ id: 2, qty: 10 }))
store.dispatch(addToCart({ id: 3, qty: 10 }))
store.dispatch(addToCart({ id: 4, qty: 10 }))