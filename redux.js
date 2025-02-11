import { legacy_createStore as createStore } from "redux";


//reducer
const cartReducer = (state = {
    login: false,
    cart: [{ id: 1, qty: 20 }],
},
    action
) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            }
        default:
            return state
    }
}

// Store (Wadah utnuk menyimpan state)
const store = createStore(cartReducer)
console.log("on create store:", store.getState());

// Subscribe (Untuk melihat perubahannya)
store.subscribe(() => {
    console.log("STORE CHANGE:", store.getState());

})

// dispatch
const action1 = { type: 'ADD_TO_CART', payload: { id: 2, qty: 10 } }
const action2 = { type: 'ADD_TO_CART', payload: { id: 3, qty: 10 } }
store.dispatch(action1)
store.dispatch(action2)
console.log("on dispatch:", store.getState());