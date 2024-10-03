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
