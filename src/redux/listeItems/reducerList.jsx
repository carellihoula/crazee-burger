import { globalList } from "../../utils/list";
import { ADD_TO_LIST, CLEAR_SELECTED, EDIT_ITEM, REMOVE_TO_LIST, RESET_LIST, SEARCH_VALUE, SELECT_ITEM } from "./actions";

const initialState = {
    list : [...globalList],
    selected :{},
    searchValue:''
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
 case RESET_LIST : 
      return{
        ...state,
        list : [...globalList],
      }
 case CLEAR_SELECTED:
      return{
        ...state,
        selected: {}
      };    
 case SEARCH_VALUE:
      return{
        ...state,
        searchValue: action.payload
        }
 default:
    return state
  }
};
