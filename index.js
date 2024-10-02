import { getAllProducts } from "./utils/fetches.js";
import { buildProductsList } from "./utils/builders.js";

const productsWrapper = document.getElementById("products-wrapper");

let products = [];

const initApp = async () => {
  products = await getAllProducts();
  buildProductsList(products, productsWrapper);
};

initApp();
