import { buildProduct } from "../../utils/builders.js";
import { deleteProduct } from "../../utils/events.js";
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
const deleteBtn = document.getElementById("delete-product-btn");

deleteBtn.addEventListener("click", async () => {
  deleteProduct(productId);
});

const initApp = async () => {
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
