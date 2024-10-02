import { buildProductEdit } from "../../utils/builders.js";
import {
  seePreview,
  confirmChanges,
  deleteProduct,
} from "../../utils/events.js";

const params = new URLSearchParams(document.location.search);
const productId = params.get("id");

const productLink = document.getElementById("product-link");

const productName = document.getElementById("product-title");
const productImage = document.getElementById("product-image");
const productBrand = document.getElementById("product-brand");
const productCategory = document.getElementById("product-category");
const productPrice = document.getElementById("product-price");
const productDescription = document.getElementById("product-description");

const productNamePreview = document.getElementById("product-title-preview");
const productImagePreview = document.getElementById("product-image-preview");
const productBrandPreview = document.getElementById("product-brand-preview");
const productCategoryPreview = document.getElementById(
  "product-category-preview"
);
const productPricePreview = document.getElementById("product-price-preview");
const productDescriptionPreview = document.getElementById(
  "product-description-preview"
);

const previewBtn = document.getElementById("preview-product-btn");
const confirmBtn = document.getElementById("confirm-product-btn");
const deleteBtn = document.getElementById("delete-product-btn");

previewBtn.addEventListener("click", async () => {
  seePreview(
    productLink,
    productName,
    productImage,
    productBrand,
    productCategory,
    productPrice,
    productDescription,
    productNamePreview,
    productImagePreview,
    productBrandPreview,
    productCategoryPreview,
    productPricePreview,
    productDescriptionPreview
  );
});

confirmBtn.addEventListener("click", async () => {
  confirmChanges(
    productId,
    productName,
    productImage,
    productBrand,
    productCategory,
    productPrice,
    productDescription
  );
});
deleteBtn.addEventListener("click", async () => {
  deleteProduct(productId);
});

const initApp = async () => {
  buildProductEdit(
    productId,
    productLink,
    productName,
    productImage,
    productBrand,
    productCategory,
    productPrice,
    productDescription,
    productNamePreview,
    productImagePreview,
    productBrandPreview,
    productCategoryPreview,
    productPricePreview,
    productDescriptionPreview
  );
};
initApp();
