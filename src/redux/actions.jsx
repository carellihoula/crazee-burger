//import React from 'react'

export const TOOGLE_BUTTON = "TOOGLE_BUTTON";
export const CHEVRON_BUTTON = "CHEVRON_BUTTON";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART";
export const SELECT_MENU = "SELECT_MENU"
export const BASKET_PAIEMENT = "BASKET_PAIEMENT";
export const BASKET_EMPTY = "BASKET_EMPTY";
export const CHEVRON_BUTTON_TO_TRUE = "CHEVRON_BUTTON_TO_TRUE"

export function basketEmpty(){
  return{
    type:BASKET_EMPTY
  }
}
export function basketPaiement(){
  return {
    type: BASKET_PAIEMENT
  }
}
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
export  function chevronButtonToTrue() {
  return {
    type : CHEVRON_BUTTON_TO_TRUE
    
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
export function selectMenu(menu){
  return{
    type : SELECT_MENU,
    payload:menu
  }
}
