import { getProductById } from "../../utils/fetches.js";
import { buildProduct } from "../../utils/builders.js";
const params = new URLSearchParams(document.location.search);
const productId = params.get("id");

const productLink = document.getElementById("product-link");

const productName = document.getElementById("product-title");
const productImage = document.getElementById("product-image");
const productBrand = document.getElementById("product-brand");
const productPrice = document.getElementById("product-price");
const productDescription = document.getElementById("product-description");
const editProductLink = document.getElementById("edit-product-link");
const deleteProductLink = document.getElementById("delete-product-link");

const initApp = async () => {
  //   const product = await getProductById(productId);
  buildProduct(
    productId,
    productLink,
    productName,
    productImage,
    productBrand,
    productPrice,
    productDescription,
    editProductLink,
    deleteProductLink
  );
};
initApp();
