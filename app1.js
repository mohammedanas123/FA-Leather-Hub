const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "SHOES",
    price: 1999,
    colors: [
      { code: "#000", img: "./img/shoe.png" },
      { code: "#808080", img: "./img/shoe1.png" },
      { code: "#A52A2A", img: "./img/shoe2.png" },
      { code: "#D2B48C", img: "./img/shoe3.png" },
      { code: "white", img: "./img/shoe4.png" },
      { code: "beige", img: "./img/shoe5.png" },
      { code: "black", img: "./img/shoe6.png" },
    ],
  },
  {
    id: 2,
    title: "JACKETS",
    price: 4999,
    colors: [
      { code: "#000", img: "./img/jacket.png" },
      { code: "#D2B48C", img: "./img/jacket1.png" },
      { code: "#000080", img: "./img/jacket2.png" },
      { code: "#A52A2A", img: "./img/jacket3.png" },
    ],
  },
  {
    id: 3,
    title: "HAND BAGS",
    price: 2999,
    colors: [
      { code: "#5C4033", img: "./img/hand bag.png" },
      { code: "#A52A2A", img: "./img/hand bag1.png" },
      { code: "#000", img: "./img/hand bag2.png" },
      { code: "#800080", img: "./img/hand bag3.png" },
      { code: "#FFC0CB", img: "./img/hand bag4.png" },
    ],
  },
  {
    id: 4,
    title: "WALLETS",
    price: 999,
    colors: [
      { code: "#0000FF", img: "./img/wallet.png" },
      { code: "#000", img: "./img/wallet1.png" },
      { code: "#008000", img: "./img/wallet2.png" },
      { code: "#36454F", img: "./img/wallet3.png" },
      { code: "#A52A2A", img: "./img/wallet4.png" },
    ],  
  },
  {
    id: 5,
    title: "BELTS",
    price: 1599,
    colors: [
      { code: "#000", img: "./img/belt.png" },
      { code: "#00008B", img: "./img/belt1.png" },
      { code: "#A52A2A", img: "./img/belt2.png" },
      { code: "#1C1C1C", img: "./img/belt3.png" },
      { code: "#000", img: "./img/belt4.png" },
    ],
  },
  {
    id: 6,
    title: "TRAVEL BAGS",
    price: 3499,
    colors: [
      { code: "brown", img: "./img/laptopbag.png" },
      { code: "grey", img: "./img/laptopbag1.png" },
      { code: "black", img: "./img/laptopbag2.png" },
      { code: "walnut", img: "./img/laptopbag3.png" },
      { code: " tan ", img: "./img/laptopbag4.png" },
      { code: "navy blue", img: "./img/laptopbag5.png" },
    ],
  },
  {
    id: 7,
    title: "TROLLEY BAGS",
    price: 6999,
    colors: [
      { code: "tan", img: "./img/trolleybag.png" },
      { code: "brown", img: "./img/trolleybag1.png"},
      { code: "black", img: "./img/trolleybag2.png"},
      { code: "brown", img: "./img/trolleybag3.png"},
    ],
  },
];

let chosenProduct = products[0];

// DOM elements for product details
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelector(".Colors");
const currentProductSizes = document.querySelectorAll(".size");

// Function to update product details
const updateProductDetails = (index) => {
  chosenProduct = products[index];

  currentProductTitle.textContent = chosenProduct.title;
  currentProductPrice.textContent = `₹${chosenProduct.price}`;
  currentProductImg.src = chosenProduct.colors[0].img || "./img/placeholder.png";

  currentProductColors.innerHTML = ""; // Clear previous colors
  chosenProduct.colors.forEach((color) => {
    const colorDiv = document.createElement("div");
    colorDiv.className = "color";
    colorDiv.style.backgroundColor = color.code;
    currentProductColors.appendChild(colorDiv);

    colorDiv.addEventListener("click", () => {
      currentProductImg.src = color.img || "./img/placeholder.png";
    });
  });
};

// Add event listeners to menu items
menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener("click", () => {
    wrapper.style.transition = "transform 0.5s ease-in-out"; // Smooth transition
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    updateProductDetails(index);
  });
});

// Add event listeners for size selection
currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((s) => {
      s.style.backgroundColor = "white";
      s.style.color = "black";
    });

    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// Payment modal functionality
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

// Initialize default product
updateProductDetails(0);

const searchInput = document.querySelector("#searchInput"); // Search input field

// Function to filter products based on search input
const filterProducts = () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm)
  );

  updateMenu(filteredProducts);
};

// Function to update the menu items with filtered products
const updateMenu = (filteredProducts) => {
  menuItems.forEach((menuItem, index) => {
    if (filteredProducts[index]) {
      menuItem.textContent = filteredProducts[index].title;
      menuItem.style.display = "block"; // Show matching product
    } else {
      menuItem.style.display = "none"; // Hide non-matching product
    }
  });

  if (filteredProducts.length > 0) {
    updateProductDetails(0); // Show first product details
  }
};

// Event listener for search input
searchInput.addEventListener("input", filterProducts);

// Initialize with all products
updateMenu(products);



