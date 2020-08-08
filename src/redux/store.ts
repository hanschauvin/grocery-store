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
  console.log('redux action?');
  console.log('init action', action);
  switch (action.type) {
    case ACTIONS.SAVE_PRODUCT_EDITING:
      return saveProdEditing(state, action);
  }
  return state;
}
function saveProdEditing(state, action) {
  return tassign(state, {
    productEditing: action.form,
  });
  return state;
}
