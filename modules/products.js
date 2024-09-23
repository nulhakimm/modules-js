export class Product {
  constructor(id, name, price) {
    if (!name || price <= 0) {
      throw new Error("Invalid product details");
    }
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name} - Price: $${this.price.toFixed(2)}`;
  }
}

// export const products = [
//   { id: 1, name: "Laptop", price: 1200 },
//   { id: 2, name: "Phone", price: 700 },
//   { id: 3, name: "Tablet", price: 450 },
//   { id: 4, name: "Keyboard", price: 250 },
// ];

// export function getProducts() {
//   return products;
// }

// export function getProductById(id) {
//   return products.find(product => product.id === id);
// }
