import { AbstractControl } from '@angular/forms';

export class ProductItemValidator {
  static ValidPrice(control: AbstractControl) {
    if (control.value) {
      if (!(control.value > 0)) {
        return { invalidPrice: true };
      }

      const regex = /^[\d,]+(\.\d{0,2})?$/;
      if (regex.test(control.value) == false) {
        return { invalidPrice: true };
      }
    } else if (control.value === 0) {
      return { invalidPrice: true };
    }
    return null;
  }
}
