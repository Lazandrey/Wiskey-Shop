import fetchLink from "./data.js";

export const getAllProducts = async () => {
  const response = await fetch(fetchLink);
  const data = await response.json();
  return data;
};

export const getProductById = async (productId) => {
  const response = await fetch(fetchLink + "/" + productId);
  const data = await response.json();
  return data;
};

export const putProduct = async (product, productId) => {
  let response;
  if (productId == "-1") {
    response = await fetch(fetchLink, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  } else {
    response = await fetch(fetchLink + "/" + productId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  }
  return response;
};

export const deleteProductById = async (productId) => {
  const response = await fetch(fetchLink + "/" + productId, {
    method: "DELETE",
  });
  return response;
};

// export const deleteRecipe = async (recipeId) => {
//   const response = await fetch(fetchLink + "/" + recipeId, {
//     method: "DELETE",
//   });
//   return response;
// };

// export const getRecipe = async (recipeId) => {
//   const response = await fetch(fetchLink + "/" + recipeId);
//   const data = await response.json();
//   return data;
// };

// export const addRecipe = async (recipe) => {
//   const response = await fetch(fetchLink, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(recipe),
//   });
//   return response;
// };

// export const editRecipe = async (recipe, recipeId) => {
//   const response = await fetch(fetchLink + "/" + recipeId, {
//     method: "PUT",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(recipe),
//   });
//   return response;
// };
