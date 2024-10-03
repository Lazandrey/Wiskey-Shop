import { buildProductsList } from "./utils/builders.js";

const params = new URLSearchParams(document.location.search);
const categorySearch = params.get("category");
const brandSearch = params.get("brand");
const search = params.get("search");

const productsWrapper = document.getElementById("products-wrapper");

const initApp = async () => {
  buildProductsList(productsWrapper, categorySearch, brandSearch, search);
};

initApp();
