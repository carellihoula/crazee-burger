//import React from 'react'

export const TOOGLE_BUTTON = "TOOGLE_BUTTON";

export const CHEVRON_BUTTON = "CHEVRON_BUTTON";

export const ADD_TO_CART = "ADD_TO_CART";

export const REMOVE_TO_CART = "REMOVE_TO_CART";

export function toggleButton() {
  return {
    type : TOOGLE_BUTTON
    
  }
}
export  function chevronButton() {
  return {
    type : CHEVRON_BUTTON
    
  }
}
export  function addToCart(produit) {
  return {
    type : ADD_TO_CART,
    payload : produit 
    
  }
}
export function removeToCart(produitId){
  return{
    type : REMOVE_TO_CART,
    payload : produitId
  }
}