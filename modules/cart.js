import { formatPrice } from "./utils.js";
import { Product } from "./products.js";

export class Cart {
  constructor() {
    this.cart = [];
  }

  addProduct(product) {
    try {
      if (!(product instanceof Product)) {
        throw new Error("Invalid product");
      }
      this.cart.push(product)
      console.log(`${product.name} added to cart. Price: ${formatPrice(product.price)}`)
    } catch (error) {
      console.error(`Error adding product: ${error.message}`);
    }
  }

  removeProduct(productId) {
    try {
      const index = this.cart.findIndex(item => item.id === productId);
      if (index === -1) {
        throw new Error("Product not found in cart");
      }
      const removedProduct = this.cart.splice(index, 1)[0];
      console.log(`${removedProduct.name} removed from cart.`);
    } catch (error) {
      console.error(`Error removing product: ${error.message}`);
    }
  }

  getCartSummary() {
    if (this.cart.length === 0) {
      console.log("your cart is empty");
      return
    }
    console.log("Cart Summary");
    this.cart.forEach(product => {
      console.log(product.getInfo());
    });
  }

  getTotalPrice() {
    const total = this.cart.reduce((sum, product) => sum + product.price, 0)
    console.log(`Total: ${formatPrice(total)}`);
    return total;
  }
}


// import { getProductById } from "./products.js";
// import { formatPrice } from "./utils.js";

// const cart = [];

// export function addToCart(productId) {
//   const product = getProductById(productId);
//   if (product) {
//     cart.push(product);
//     console.log(`${product.name} added to cart. Price: ${formatPrice(product.price)}`);
//   } else {
//     console.log(`Product not in cart!`);
//   }
// }


// export function getCart() {
//   return cart;
// }

// export function getTotal() {
//   return cart.reduce((total, product) => total + product.price, 0);
// }
