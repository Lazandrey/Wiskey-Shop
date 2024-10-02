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

export const deleteProductById = async (productId) => {
  const response = await deleteProductById(productId);
  if (response.ok) {
    ConfirmOKDialog("Product deleted successfully");
  } else {
    warnindDialog(response.statusText);
  }
};
const confirmedDelete = (productId, onfirmResult) => {};
export const deleteProduct = async (productId) => {
  const test = ConfirmDialogOpen("test cbcvbccvbcvbcbv");
  test.addEventListener("close", () => {
    console.log(test.returnValue);
    confirmedDelete(productId, test.returnValue);
  });
};

// export const changeDifficultyFilter = async (
//   difficulty,
//   recipesWrapper,
//   recipes
// ) => {
//   if (difficulty.value === "All") {
//     buildRecipesList(recipes, recipesWrapper);
//   } else {
//     const filteredRecipes = recipes.filter(
//       (recipe) => recipe.difficulty === difficulty.value
//     );
//     buildRecipesList(filteredRecipes, recipesWrapper);
//   }
// };

// export const editRecipeEvent = (recipeId) => {
//   window.location.href = `../recipeedit/index.html?id=${recipeId}`;
// };

// export const deleteRecipeEvent = async (recipeId, message) => {
//   const response = await deleteRecipe(recipeId, message);
//   if (response.ok) {
//     message.classList.add("ok-message");
//     message.innerText = "Recipe deleted successfully";
//     setTimeout(() => {
//       window.location.href = "../index.html";
//     }, 2000);
//   } else {
//     message.classList.add("error-message");
//     message.innerText = `Failed to delete recipe. Error: ${response.statusText}`;
//   }
// };

// export const addRecipeEvent = async (
//   title,
//   description,
//   directions,
//   ingredients,
//   difficulty,
//   image,
//   addOkMsg
// ) => {
//   const recipe = {
//     title: title.value,
//     description: description.value,
//     instructions: directions.value,
//     ingredients: ingredients.value,
//     difficulty: difficulty.value,
//     recipe_img: image.value,
//   };
//   if (!isValidRecipt(recipe, addOkMsg)) {
//     return;
//   }
//   const response = await addRecipe(recipe);
//   if (response.ok) {
//     addOkMsg.innerText = "Recipe added ok";

//     setTimeout(() => {
//       window.location.href = "../index.html";
//     }, 3000);
//   } else {
//     addOkMsg.classList.add("error-message");
//     addOkMsg.innerText = `Failed to delete recipe. Error: ${response.statusText}`;
//   }
// };

// export const editRecipeConfirmedEvent = async (
//   title,
//   description,
//   directions,
//   ingredients,
//   difficulty,
//   image,
//   addOkMsg,
//   recipeId
// ) => {
//   const recipe = {
//     title: title.value,
//     description: description.value,
//     instructions: directions.value,
//     ingredients: ingredients.value,
//     difficulty: difficulty.value,
//     recipe_img: image.value,
//   };
//   if (!isValidRecipt(recipe, addOkMsg)) {
//     return;
//   }
//   const response = await editRecipe(recipe, recipeId);
//   console.log(response);
//   if (response.ok) {
//     addOkMsg.classList.add("ok-msg");
//     addOkMsg.innerText = "Recipe edited ok";
//     setTimeout(() => {
//       window.location.href = "../index.html";
//     }, 3000);
//   } else {
//     addOkMsg.classList.add("error-message");
//     addOkMsg.innerText = `Failed to delete recipe. Error: ${response.statusText}`;
//   }
// };

// export const changeIngredientsFilter = async (
//   target,
//   recipesWrapper,
//   recipes
// ) => {
//   let filteredIngRecipes = recipes;
//   switch (target.id) {
//     case "low-ingredients-btn":
//       filteredIngRecipes = recipes.filter(
//         (recipe) => recipe.ingredients.split(";").length <= 5
//       );
//       buildRecipesList(filteredIngRecipes, recipesWrapper);
//       break;
//     case "moderate-ingredients-btn":
//       filteredIngRecipes = recipes.filter(
//         (recipe) =>
//           recipe.ingredients.split(";").length <= 10 &&
//           recipe.ingredients.split(";").length > 5
//       );
//       buildRecipesList(filteredIngRecipes, recipesWrapper);
//       break;
//     case "many-ingredients-btn":
//       filteredIngRecipes = recipes.filter(
//         (recipe) => recipe.ingredients.split(";").length > 10
//       );
//       break;
//     case "all-ingredients-btn":
//       break;
//   }
//   buildRecipesList(filteredIngRecipes, recipesWrapper);
// };
