import { getProductById, getAllProducts } from "../../utils/fetches.js";

const addSearchLisener = () => {
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-button");

  searchInput.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      searchBtn.click();
    }
    searchBtn.addEventListener("click", () => {
      const search = searchInput.value;
      window.location.href = `../../index.html?search=${search}`;
    });
  });
};

const productSearch = (product, search) => {
  if (product.name.toLowerCase().includes(search.toLowerCase())) {
    return true;
  }
  if (product.brand.toLowerCase().includes(search.toLowerCase())) {
    console.log(product.brand, search);
    return true;
  }
  if (product.category.toLowerCase().includes(search.toLowerCase())) {
    return true;
  }
  if (product.description.toLowerCase().includes(search.toLowerCase())) {
    return true;
  }
  if (product.price.toString().includes(search)) {
    return true;
  }
  return false;
};

const buildMenuHtml = (categories, brands) => {
  const categorySidemenu = document.getElementById("category-side");
  const brandSidemenu = document.getElementById("brand-side");
  const categoryDropdown = document.getElementById("category-dropdown");
  const brandDropdown = document.getElementById("brand-dropdown");

  categoryDropdown.innerHTML = "";
  brandDropdown.innerHTML = "";

  categorySidemenu.innerHTML = "";
  brandSidemenu.innerHTML = "";
  categories.forEach((category) => {
    const categoryLink = document.createElement("li");
    categoryLink.innerHTML = `<a href="../../index.html?category=${category}">${category}</a>`;
    categorySidemenu.appendChild(categoryLink);

    const categoryDropdownLink = document.createElement("li");
    categoryDropdownLink.innerHTML = `<a href="../../index.html?category=${category}">${category}</a>`;
    categoryDropdown.appendChild(categoryDropdownLink);
  });
  brands.forEach((brand) => {
    const brandLink = document.createElement("li");
    brandLink.innerHTML = `<a href="../../index.html?brand=${brand}">${brand}</a>`;
    brandSidemenu.appendChild(brandLink);

    const brandDropdownLink = document.createElement("li");
    brandDropdownLink.innerHTML = `<a href="../../index.html?brand=${brand}">${brand}</a>`;
    brandDropdown.appendChild(brandDropdownLink);
  });
};

export const buildMenu = async (products) => {
  if (products === undefined) {
    products = await getAllProducts();
  }
  const categories = products
    .map((p) => p.category)
    .filter(
      (category, index, self) => index === self.findIndex((c) => c === category)
    )
    .sort((a, b) => a.localeCompare(b));

  const brands = products
    .map((p) => p.brand)
    .filter(
      (brand, index, self) => index === self.findIndex((c) => c === brand)
    )
    .sort((a, b) => a.localeCompare(b));

  buildMenuHtml(categories, brands);
};

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

export const buildProductsList = async (
  products,
  productsWrapper,
  categorySearch,
  brandSearch,
  search
) => {
  addSearchLisener();

  buildMenu(products);
  products.sort((a, b) => a.price - b.price);
  if (categorySearch) {
    products = products.filter((p) => p.category === categorySearch);
  }
  if (brandSearch) {
    products = products.filter((p) => p.brand === brandSearch);
  }
  if (search) {
    products = products.filter((product) => {
      return productSearch(product, search);
    });
  }
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
  product,
  productId,
  productLink,
  productName,
  productImage,
  productBrand,
  productPrice,
  productDescription,
  editProductLink
) => {
  addSearchLisener();
  buildMenu();

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
};
export const buildProductEdit = async (
  product,
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
  addSearchLisener();
  buildMenu();
  if (productId == "-1") {
    productImage.placeholder = "Add image url";
    productName.placeholder = "Add product name";
    productBrand.placeholder = "Add product brand";
    productCategory.placeholder = "Add product category";
    productPrice.placeholder = "Add product price";
    productDescription.placeholder = "Add product description";
  } else {
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
