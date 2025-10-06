// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// BACK TO TOP BUTTON
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove("opacity-0", "invisible");
    backToTop.classList.add("opacity-100", "visible");
  } else {
    backToTop.classList.add("opacity-0", "invisible");
    backToTop.classList.remove("opacity-100", "visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ACCORDION
// ACCORDION
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector("div.flex");
  const content = item.querySelector(".accordion-content");
  const icon = item.querySelector("svg");

  header.addEventListener("click", () => {
    content.classList.toggle("hidden");
    if (content.classList.contains("hidden")) {
      icon.style.transform = "rotate(0deg)";
    } else {
      icon.style.transform = "rotate(180deg)";
    }
  });
});
// ADD TO CART FUNCTIONALITY
let cart = [];
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const cartItemsContainer = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");
const clearCartBtn = document.getElementById("clearCart");
const checkoutBtn = document.getElementById("checkout");

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const menuItem = button.closest(".menu-item");
    const name = menuItem.getAttribute("data-name");
    const price = parseInt(menuItem.getAttribute("data-price"));

    // Add to cart
    cart.push({ name, price });
    updateCartUI();

    // Show cart modal
    cartModal.classList.remove("hidden");
  });
});

function updateCartUI() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const itemElement = document.createElement("div");
    itemElement.className =
      "flex justify-between items-center p-2 bg-manhattan-dark rounded";
    itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>${item.price} ₽</span>
            <button class="text-red-500 text-sm" data-index="${index}">❌</button>
        `;
    cartItemsContainer.appendChild(itemElement);

    // Remove item from cart
    itemElement.querySelector("button").addEventListener("click", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"));
      cart.splice(idx, 1);
      updateCartUI();
    });
  });

  totalPriceElement.textContent = `${total} ₽`;
}

// Close cart modal
closeCart.addEventListener("click", () => {
  cartModal.classList.add("hidden");
});

// Clear cart
clearCartBtn.addEventListener("click", () => {
  cart = [];
  updateCartUI();
});

// Checkout
checkoutBtn.addEventListener("click", () => {
  alert("Спасибо за заказ! Мы свяжемся с вами для подтверждения.");
  cart = [];
  updateCartUI();
  cartModal.classList.add("hidden");
});

// NAVIGATION LINK HOVER EFFECT
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.color = "#e67e22";
  });
  link.addEventListener("mouseleave", () => {
    link.style.color = "";
  });
});
