export const INCREASE_QTY = "INCREASE_QTY"
export const MINUS_QTY = "MINUS_QTY"
//import React from 'react';

export function increaseQty(productId) {
  return {
    type  : INCREASE_QTY,
    payload : productId
  }
}
export function minusQty(productId) {
    return {
      type  : MINUS_QTY,
      payload : productId
    }
  }
  