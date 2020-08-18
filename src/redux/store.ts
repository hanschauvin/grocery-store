import { tassign } from 'tassign';
import * as ACTIONS from './action';
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';

export interface IAppState {
  productEditing: {
    productName: string;
    productPrice: number;
    productCategory: string;
    productUrl: string;
  };
  isAdmin: boolean;
  itemsInCart: number;
}

// default state
export const INITIAL_STATE: IAppState = {
  productEditing: {
    productName: '',
    productPrice: null,
    productCategory: '',
    productUrl: '',
  },
  isAdmin: false,
  itemsInCart: 0,
};

export function rootReducer(state: IAppState, action): IAppState {
  console.log('init action', action.type);
  switch (action.type) {
    case ACTIONS.SAVE_PRODUCT_EDITING:
      return saveProdEditing(state, action);
    case ACTIONS.RESET_PRODUCT_EDITING:
      return resetProdEditing(state, action);
    case ACTIONS.ADD_TO_CART:
      return addToCart(state, action);
  }
  return state;
}

function saveProdEditing(state, action) {
  return tassign(state, {
    productEditing: action.form,
  });
}

function resetProdEditing(state, action) {
  return tassign(state, {
    productEditing: {
      productName: '',
      productPrice: null,
      productCategory: '',
      productUrl: '',
    },
  });
}

function addToCart(state, action) {
  let actionObj = action as ACTIONS.AddToCartAction;
  console.log('state:', state);
  return tassign(state, {
    itemsInCart: state.itemsInCart + actionObj.itemsInCart,
  });
  
}
