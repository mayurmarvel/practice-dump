//exporting module

console.log("Exporting Module");

const shippingCost = 10; // scoped to onl this module
const cart = [];

export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
}

const totalPrice = 125;
const totalQuantity = 12;

export { totalPrice as tprice, totalQuantity }