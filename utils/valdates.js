import { warnindDialog } from "../../utils/dialogs.js";
const isUrlValid = (url) => {
  const regex =
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/;
  const isValid = regex.test(url);

  return isValid;
};

const isNumberValid = (num) => {
  const regex = /^\d*[0-9]?(?:\.[0-9]{1,2})?$/;
  const isValid = regex.test(num);
  return isValid;
};
export const isValidProduct = (product) => {
  if (product.name.length < 3) {
    warnindDialog("Title must be at least 3 characters long");
    return false;
  }
  if (!isUrlValid(product.image_url)) {
    warnindDialog("Image url is invalid");
    return false;
  }
  if (product.brand.length < 3) {
    warnindDialog("Brand must be at least 3 characters long");
    return false;
  }
  if (product.category.length < 3) {
    warnindDialog("Category must be at least 3 characters long");
    return false;
  }
  if (!isNumberValid(product.price)) {
    warnindDialog("Price should be  nubmer with not  more 2 decimal places");
    return false;
  }
  if (product.description.length < 10) {
    warnindDialog("Description must be at least 10 characters long");
    return false;
  }
  return true;
};

// const warningMsg = (msg, addOkMsg) => {
//   addOkMsg.innerText = msg;
//   addOkMsg.classList.add("warning-msg");
// };

export const isValidRecipt = (recipe, addOkMsg) => {
  if (recipe.title.length < 3) {
    warningMsg("Title must be at least 3 characters long", addOkMsg);
    return false;
  }
  if (recipe.description.length < 10) {
    warningMsg("Description must be at least 10 characters long", addOkMsg);
    return false;
  }
  if (recipe.instructions.length < 50) {
    warningMsg("Directions must be at least 50 characters long", addOkMsg);
    return false;
  }
  if (recipe.ingredients.length < 50) {
    warningMsg("Ingredients must be at least 50 characters long", addOkMsg);
    return false;
  }

  if (!isUrlValid(recipe.recipe_img)) {
    warningMsg("Image url is invalid", addOkMsg);
    return false;
  }

  return true;
};
