import { CHEVRON_BUTTON, SELECT_MENU, TOOGLE_BUTTON, CHEVRON_BUTTON_TO_TRUE } from "./actions"

const initialState = {
 isChecked : false,
 isClicked : false,
 selectedMenu : 'ajouter',   
}

export const buttonReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOOGLE_BUTTON:
            return {
                ...state,
                isChecked : !state.isChecked
            }
        case CHEVRON_BUTTON:
            return {
                ...state,
                isClicked : !state.isClicked
            }
        case CHEVRON_BUTTON_TO_TRUE:
            return {
                ...state,
                isClicked : true
            }
        case SELECT_MENU:
            return{
                ...state,
                selectedMenu : action.payload
            }
        default:
            return state
    }
}