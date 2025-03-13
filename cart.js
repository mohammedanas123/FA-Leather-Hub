// Sample cart data
let cart = [
  {
    id: 1,
    title: "Leather Shoes",
    price: 1999,
    quantity: 1,
    images: ["img/shoe.png", "img/shoe1.png", "img/shoe2.png","img/shoe3.png","img/shoe4.png","img/shoe5.png","img/shoe6.png"],
  },
  {
    id: 2,
    title: "Leather Jacket",
    price: 4999,
    quantity: 1,
    images: ["img/jacket.png", "img/jacket1.png", "img/jacket2.png", "img/jacket3.png"],
  },
  {
    id: 3,
    title: "leather Hand bag",
    price: 2999,
    quantity: 1,
    images: ["img/hand bag.png", "img/hand bag1.png", "img/hand bag2.png", "img/hand bag3.png", "img/hand bag4.png"],
  },
  {
    id: 4,
    title: "leather Wallet",
    price: 999,
    quantity: 1,
    images: ["img/wallet.png", "img/wallet1.png", "img/wallet2.png", "img/wallet4.png"],
  },
  {
    id: 5,
    title: "leather Belt",
    price: 1599,
    quantity: 1,
    images: ["img/belt.png", "img/belt1.png", "img/belt2.png", "img/belt3.png", "img/belt4.png"],
  },
  {
    id: 6,
    title: "leather Laptop bag",
    price: 3599,
    quantity: 1,
    images: ["img/laptopbag.png", "img/laptopbag1.png", "img/laptopbag2.png", "img/laptopbag3.png", "img/laptopbag4.png"],
  },
  {
    id: 7,
    title: "leather Trolley bag",
    price: 5999,
    quantity: 1,
    images: ["img/trolleybag.png", "img/trolleybag1.png", "img/trolleybag2.png", "img/trolleybag3.png"],
  },
];

// DOM Elements
const cartWrapper = document.querySelector(".cartWrapper");
const subtotalElement = document.getElementById("subtotal");
const totalElement = document.getElementById("total");
const buyNowButton = document.getElementById("buyNowButton");
const paymentModal = document.querySelector(".payment");
const closePaymentModal = document.getElementById("closePaymentModal");

// Render Cart Items
function renderCart() {
  cartWrapper.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cartItem";
    cartItem.innerHTML = `
      <div class="cartImageContainer">
        <img src="${item.images[0]}" alt="${item.title}" class="cartImg">
        <div class="imageSwitcher">
          <button class="prevImage">◀</button>
          <button class="nextImage">▶</button>
        </div>
      </div>
      <div class="cartDetails">
        <h2 class="cartItemTitle">${item.title}</h2>
        <p class="cartItemDesc">Price: ₹${item.price}</p>
        <div class="cartItemControls">
          <button class="cartItemButton decrease">-</button>
          <span class="cartItemQuantity">${item.quantity}</span>
          <button class="cartItemButton increase">+</button>
        </div>
        <span class="cartItemPrice">₹${item.price * item.quantity}</span>
        <button class="cartItemRemove">Remove</button>
      </div>
    `;
    cartWrapper.appendChild(cartItem);

    // Update subtotal
    subtotal += item.price * item.quantity;

    // Add event listeners for quantity controls
    const decreaseButton = cartItem.querySelector(".decrease");
    const increaseButton = cartItem.querySelector(".increase");
    const removeButton = cartItem.querySelector(".cartItemRemove");

    decreaseButton.addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        cart.splice(index, 1);
      }
      renderCart();
    });

    increaseButton.addEventListener("click", () => {
      item.quantity++;
      renderCart();
    });

    removeButton.addEventListener("click", () => {
      cart.splice(index, 1);
      renderCart();
    });

    // Add event listeners for image switcher
    const prevImageButton = cartItem.querySelector(".prevImage");
    const nextImageButton = cartItem.querySelector(".nextImage");
    const cartImg = cartItem.querySelector(".cartImg");

    let currentImageIndex = 0;

    prevImageButton.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex - 1 + item.images.length) % item.images.length;
      cartImg.src = item.images[currentImageIndex];
    });

    nextImageButton.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + 1) % item.images.length;
      cartImg.src = item.images[currentImageIndex];
    });
  });

  // Update subtotal and total
  subtotalElement.textContent = `₹${subtotal}`;
  totalElement.textContent = `₹${subtotal}`;
}

// Buy Now Button
buyNowButton.addEventListener("click", () => {
  if (cart.length > 0) {
    paymentModal.style.display = "flex";
  } else {
    alert("Your cart is empty. Add items to proceed.");
  }
});

// Close Payment Modal
closePaymentModal.addEventListener("click", () => {
  paymentModal.style.display = "none";
});

// Initial Render
renderCart();