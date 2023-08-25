import { globalList } from "../../utils/list";
import { ADD_TO_LIST, EDIT_ITEM, REMOVE_TO_LIST, SELECT_ITEM } from "./actions";

const initialState = {
    list : [...globalList],
    selected :null ,
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
        list : state.list.filter(item=> item.id !== action.payload.id )
    }
 case SELECT_ITEM:
    return{
      ...state,
      selected : action.payload
    }
 case EDIT_ITEM:
    const updateItem = action.payload
    const updatedList = state.list.map(item=>item.id === updateItem.id ? updateItem : item)
    return{
      ...state,
      list : updatedList,
      

    }
  default:
    return state
  }
};
