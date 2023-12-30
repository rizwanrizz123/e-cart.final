import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],//wishlist may have more than one item
    reducers:{
        //actions
        //function/logic to add items into wishlist array
        addToWishlist :(state , action)=>{
            state.push(action.payload)
        },
        //function to remove items from the wishlist
        removeFromWishlist :(state, action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})

//action is required by component inorder to update state
export const { addToWishlist,removeFromWishlist } = wishlistSlice.actions

//reducer is required store to change the state value
export default wishlistSlice.reducer