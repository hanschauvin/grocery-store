import { tassign } from 'tassign';
import * as ACTIONS from './action';

export interface IAppState {
  productEditing: {
    productName: string;
    productPrice: number;
    productCategory: string;
    productUrl: string;
  };
}

// default state
export const INITIAL_STATE: IAppState = {
  productEditing: {
    productName: '',
    productPrice: null,
    productCategory: '',
    productUrl: '',
  },
};

export function rootReducer(state: IAppState, action): IAppState {
  console.log('init action', action.type);
  switch (action.type) {
    case ACTIONS.SAVE_PRODUCT_EDITING:
      return saveProdEditing(state, action);
    case ACTIONS.RESET_PRODUCT_EDITING:
      return resetProdEditing(state, action);
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
