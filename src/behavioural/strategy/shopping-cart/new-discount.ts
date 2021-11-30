import { DiscountStrategy } from './discount-stragety';
import { ECommerceShoppingCart } from './ecommerce-shopping-cart';

export class NewDiscount extends DiscountStrategy {
  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 150) {
      this.discount = 5;
    }

    return total - total * (this.discount / 100);
  }
}
