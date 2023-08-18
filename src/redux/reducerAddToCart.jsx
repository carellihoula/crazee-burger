import { ADD_TO_CART, REMOVE_TO_CART } from "./actions";
import { INCREASE_QTY, MINUS_QTY } from "./actions.quantity";

const initialState = {
 panier : [],  
}

export const reducerAddToCart = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TO_CART:
                const existingItem  = state.panier.findIndex((item)=> item.id === action.payload.id)
                if(existingItem !== -1){
                    return{
                        ...state,
                        panier : state.panier.map(item => {
                            if(item.id  === action.payload.id){
                                return{
                                    ...item,
                                    quantity : item.quantity +1,
                                }
                            }
                            return item
                        })
                }
                    }
                        else{
                    return {
                        ...state,
                        panier: [...state.panier, action.payload ],
                      };
                }
                
              
        case REMOVE_TO_CART:
            return{
                ...state,
                panier : state.panier.filter(item=> item.id !== action.payload)
            }
        
        case INCREASE_QTY:
            return{
                ...state,
                panier : state.panier.map((item) => {
                    if(item.id == action.payload){
                        return {
                            ...item,
                            quantity : item.quantity +1,
                        }
                    }
                    return item
                    

                })
            }

        case MINUS_QTY:
            return{
                ...state,
                panier : state.panier.map((item) => {
                    if(item.id == action.payload){
                        return {
                            ...item,
                            quantity : Math.max(item.quantity-1, 1), // minimum est 0
                        }
                    }
                    return item
                    

                })
            }

        default:
            return state
    }
}