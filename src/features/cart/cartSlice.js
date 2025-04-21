import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    // cart: [],
    cart: [
    {
        pizzaId:12,
        name: 'Spinach',
        quantity: 2,
        uniPrice: 16,
        totalPrice: 300
    }
],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action){
            //payload is equal to new Item
            state.cart.push(action.payload)
        },
        deleteItem(state, action){
            //payload = pizzaId
            state.cart = state.cart.filter(item=>item.pizzaId !== action.payload)
        },
        increaseItemQuantity(state, action){
            //payload = pizzaId
            const item = state.cart.find(item=>item.pizzaId === action.payload)
            item.quantity++;
            item.totalPrice = item.quantity * item.uniPrice;
        },
        decreaseItemQuantity(state, action){
            //payload = pizzaId
            const item = state.cart.find(item=>item.pizzaId === action.payload)
            item.quantity--;
            item.totalPrice = item.quantity * item.uniPrice;
        },
        clearCart(state){
            state.cart = []
        },
    }
})

export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions
export default cartSlice.reducer;