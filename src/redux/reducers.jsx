import { TOOGLE_BUTTON, CHEVRON_BUTTON } from "./actions"

const initialState = {
 isChecked : false,
 isClicked : false   
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
        default:
            return state
    }
}