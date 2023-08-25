export const ADD_TO_LIST  = "ADD_TO_LIST";
export const REMOVE_TO_LIST = "REMOVE_TO_LIST ";
export const SELECT_ITEM = "SELECT_ITEM" ;
export const EDIT_ITEM = "EDIT_ITEM"

export function addToList(item) {
  return {
    type : ADD_TO_LIST,
    payload : item
  };
}

export function removeToList(item) {
    return {
      type : REMOVE_TO_LIST,
      payload : item
    };
  }
export function selectedItem(item){
  return{
    type : SELECT_ITEM,
    payload : item
  }
}

export function editedItem(item){
  return{
    type : EDIT_ITEM,
    payload : item
  }
}


