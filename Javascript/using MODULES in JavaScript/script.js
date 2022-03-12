// Importing module

//  make sure to set type=module in Html script tag
//  <script type="module" src="./script.js"></script>

import { addToCart, tprice, totalQuantity as quantity, totalQuantity } from "./shoppingCart.js";

import * as ShoppingCartObj from './shoppingCartObj.js' // Importing everything

import greet from './greeting.js' // importing a DEFAULT export

greet();

console.log("Importing Module");

addToCart('tomato', 12)

console.log(tprice); // using AS alias name in Export

console.log(quantity); // using AS variable name in Import

////////////////////////(  PART - 2  )//////////////////////////////////


//  Importing everything as a Object and using it.

console.log(ShoppingCartObj.addToCart('potato', 20));