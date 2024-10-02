import { getProductById } from "../../utils/fetches.js";

const getProductCard = (product) => {
  const productCard = document.createElement("a");
  const productImage = document.createElement("img");
  const productTitle = document.createElement("p");
  const productPrice = document.createElement("p");

  productTitle.innerText = product.name;
  productPrice.innerText = Intl.NumberFormat("en-LT", {
    style: "currency",
    currency: "EUR",
  }).format(product.price);
  productImage.src = product.image_url;
  productTitle.classList.add("product-card-title");
  productPrice.classList.add("product-card-price");
  productCard.appendChild(productImage);
  productCard.appendChild(productTitle);
  productCard.appendChild(productPrice);
  productCard.classList.add("product-card");
  productCard.href = `./html/product/index.html?id=${product.id}`;

  return productCard;
};

export const buildProductsList = (products, productsWrapper) => {
  productsWrapper.innerHTML = "";
  products.forEach((product) => {
    productsWrapper.append(getProductCard(product));
  });
};

export const getProdactLink = (product) => {
  const link = `<a href="../../index.html">Home</a> > <a href="../../index.html?category=${product.category}">${product.category}</a> >  ${product.name}`;
  return link;
};
export const buildProduct = async (
  productId,
  productLink,
  productName,
  productImage,
  productBrand,
  productPrice,
  productDescription,
  editProductLink,
  deleteProductLink
) => {
  const product = await getProductById(productId);
  productLink.innerHTML = getProdactLink(product);
  productImage.src = product.image_url;
  productName.innerText = "Brand: " + product.name;
  productBrand.innerText = "Category: " + product.brand;
  productPrice.innerText =
    "Price: " +
    Intl.NumberFormat("en-LT", {
      style: "currency",
      currency: "EUR",
    }).format(product.price);
  productDescription.innerText = product.description;
  editProductLink.href = `../editproduct/index.html?id=${product.id}`;
  deleteProductLink.href = `./deleteproduct/index.html?id=${product.id}`;
};
export const buildProductEdit = async (
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
) => {
  if (productId == "-1") {
    productImage.placeholder = "Add image url";
    productName.placeholder = "Add product name";
    productBrand.placeholder = "Add product brand";
    productCategory.placeholder = "Add product category";
    productPrice.placeholder = "Add product price";
    productDescription.placeholder = "Add product description";
  } else {
    const product = await getProductById(productId);
    productLink.innerHTML = getProdactLink(product);
    productImage.value = product.image_url;
    productName.value = product.name;
    productBrand.value = product.brand;
    productCategory.value = product.category;
    productPrice.value = product.price;
    productDescription.value = product.description;
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
  }
};

// const getRecipeDifficultyCSSClass = (recipe) => {
//   switch (recipe.difficulty) {
//     case "Easy":
//       return "easy";
//       break;
//     case "Moderate":
//       return "moderate";
//       break;
//     case "Hard":
//       return "hard";
//       break;
//   }
// };
// const getRecipeHTML = (recipe) => {
//   const recipeCard = document.createElement("a");
//   const recipeTitle = document.createElement("h2");
//   const recipeDescription = document.createElement("p");
//   const recipeDirections = document.createElement("p");
//   const recipeIngredients = document.createElement("p");
//   const recipeDifficulty = document.createElement("p");
//   const recipeImage = document.createElement("img");
//   const ingredientsNo = document.createElement("h3");

//   recipeTitle.innerText = recipe.title;
//   recipeDescription.innerText = recipe.description;
//   recipeDirections.innerText = recipe.instructions;
//   recipeIngredients.innerText = recipe.ingredients;
//   recipeDifficulty.innerText = recipe.difficulty;
//   recipeImage.src = recipe.recipe_img;
//   recipeDifficulty.classList.add(getRecipeDifficultyCSSClass(recipe));
//   ingredientsNo.innerText =
//     "Ingredients number: " + recipe.ingredients.split(";").length;
//   recipeCard.classList.add("recipe");

//   recipeCard.href = `./recipe/index.html?id=${recipe.id}`;
//   recipeCard.append(recipeTitle);
//   const div1 = document.createElement("div");
//   const div2 = document.createElement("div");
//   const h31 = document.createElement("h3");
//   h31.innerText = "Description:";
//   div2.append(h31, recipeDescription);
//   const h311 = document.createElement("h3");
//   h311.innerText = "Difficulty level:";

//   div2.append(h311, recipeDifficulty, ingredientsNo);
//   div1.append(div2, recipeImage);
//   recipeCard.append(div1);
//   const h32 = document.createElement("h3");
//   h32.innerText = "Directions:";
//   recipeCard.append(h32);

//   recipeCard.append(recipeDirections);
//   const h33 = document.createElement("h3");
//   h33.innerText = "Ingredients:";
//   recipeCard.append(h33);

//   recipeCard.append(recipeIngredients);

//   return recipeCard;
// };

// export const buildRecipesList = (recipes, recipesWrapper) => {
//   recipesWrapper.innerHTML = "";
//   recipes.forEach((recipe) => {
//     recipesWrapper.append(getRecipeHTML(recipe));
//   });
// };

// export const buildRecipe = (
//   recipe,
//   title,
//   description,
//   directions,
//   ingredients,
//   difficulty,
//   image,
//   ingredientsNo
// ) => {
//   title.innerText = recipe.title;
//   description.innerText = recipe.description;
//   directions.innerText = recipe.instructions;
//   ingredients.innerText = recipe.ingredients;
//   difficulty.innerText = recipe.difficulty;
//   ingredientsNo.innerText =
//     "Ingredients number: " + recipe.ingredients.split(";").length;
//   image.src = recipe.recipe_img;
//   difficulty.classList.add(getRecipeDifficultyCSSClass(recipe));
// };

// export const buildRecipeEdit = (
//   recipe,
//   title,
//   description,
//   directions,
//   ingredients,
//   difficulty,
//   image
// ) => {
//   title.value = recipe.title;
//   description.value = recipe.description;
//   directions.value = recipe.instructions;
//   ingredients.value = recipe.ingredients;
//   difficulty.value = recipe.difficulty;
//   image.value = recipe.recipe_img;
// };
