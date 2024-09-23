export function formatPrice(price) {
  if (typeof price !== "number" || price < 0) {
    throw new Error("Invalid price");
  }
  return `$${price.toFixed(2)}`;
}

export function handleError(error) {
  console.error(`An error occurred: ${error.message}`);
}

// export function formatPrice(price) {
//   return `$${price.toFixed(2)}`
// }

// export function generateId() {
//   return Math.floor(Math.random() * 10000)
// }

