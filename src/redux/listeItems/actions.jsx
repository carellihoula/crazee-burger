export const ADD_TO_LIST  = "ADD_TO_LIST";
export const REMOVE_TO_LIST = "REMOVE_TO_LIST ";


export function addToList(product) {
  return {
    type : ADD_TO_LIST,
    payload : product
  };
}

export function removeToList(productId) {
    return {
      type : REMOVE_TO_LIST,
      payload : productId
    };
  }


