import { globalList } from "../../utils/list";
import { ADD_TO_LIST, REMOVE_TO_LIST } from "./actions";

const initialState = {
    list : [...globalList],
};

export default function reducerList(state = initialState, action){
  switch (action.type) {

  case ADD_TO_LIST:
    return { 
     ...state, 
     list : [...state.list, action.payload] 
    }

 case REMOVE_TO_LIST:
    return{
        ...state,
        list : state.list.filter(produtct=> produtct.id !== action.payload )
    }
    
  default:
    return state
  }
};
