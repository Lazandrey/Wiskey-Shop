import { isValidProduct } from "../../utils/valdates.js";
import { putProduct, deleteProductById } from "../../utils/fetches.js";
import {
  ConfirmOKDialog,
  warnindDialog,
  ConfirmDialogOpen,
} from "../../utils/dialogs.js";
export const seePreview = (
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
) => {
  productLink.innerHTML = `Home > ${productCategory.value} > ${productName.value}`;
  productNamePreview.innerText = productName.value;
  productImagePreview.src = productImage.value;
  productBrandPreview.innerText = "Brand: " + productBrand.value;
  productCategoryPreview.innerText = "Category: " + productCategory.value;
  productPricePreview.innerText =
    "Price: " +
    Intl.NumberFormat("en-LT", {
      style: "currency",
      currency: "EUR",
    }).format(productPrice.value);
  productDescriptionPreview.innerText = productDescription.value;
};

export const confirmChanges = async (
  productId,
  productName,
  productImage,
  productBrand,
  productCategory,
  productPrice,
  productDescription
) => {
  const product = {
    id: productId,
    name: productName.value,
    image_url: productImage.value,
    brand: productBrand.value,
    category: productCategory.value,
    price: productPrice.value,
    description: productDescription.value,
  };
  if (isValidProduct(product)) {
    const response = await putProduct(product, productId);
    if (response.ok) {
      ConfirmOKDialog("Product updated successfully");
    } else {
      warnindDialog(response.statusText);
    }
  }
};

const confirmedDelete = async (productId, confirmResult) => {
  if (confirmResult === "confirm") {
    const response = await deleteProductById(productId);
    if (response.ok) {
      ConfirmOKDialog("Product deleted successfully");
      setTimeout(() => {
        window.location.href = "../../index.html";
      }, 2000);
    } else {
      warnindDialog(response.statusText);
    }
  }
};
export const deleteProduct = async (productId) => {
  const test = ConfirmDialogOpen(
    "Are you sure you want to delete this product?"
  );
  test.addEventListener("close", () => {
    confirmedDelete(productId, test.returnValue);
  });
};
