import { ADD_TO_CART, REMOVE_TO_CART } from "./actions";

const initialState = {
 panier : [],  
}

export const reducerAddToCart = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TO_CART:
            
                return {
                  ...state,
                  panier: [...state.panier, action.payload ],
                };
              
        case REMOVE_TO_CART:
            return{
                ...state,
                panier : state.panier.filter(item=> item.id !== action.payload)
            }
        default:
            return state
    }
}