export const CATEGORIES = ['Cashew', 'Peanut', 'Macadamia', 'Pecan', 'Walnut'];

export const SAVE_PRODUCT_EDITING = 'SAVE_PRODUCT_EDITING';
export const RESET_PRODUCT_EDITING = 'RESET_PRODUCT_EDITING';
export const ADD_TO_CART = 'ADD_TO_CART';
export class AddToCartAction {
  type: string;
  itemsInCart: number;

  itemID: string;
  constructor(addCount: number, id: string) {
    this.type = ADD_TO_CART;
    this.itemsInCart = addCount;
    this.itemID = id;
  }

  toObject() {
    return {
      type: this.type,
      itemsInCart: this.itemsInCart,
      itemID: this.itemID,
    };
  }
}
