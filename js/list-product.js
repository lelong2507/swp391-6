const searchIcon = document.getElementById("search-icon");

searchIcon.addEventListener("click", function () {
  const searchForm = document.querySelector(".form-search");
  searchForm.classList.toggle("active");
});

const userIcon = document.getElementById("user-icon");

userIcon.addEventListener("click", function () {
  const userForm = document.querySelector(".form-login");
  userForm.classList.toggle("active");
});

// sum of cart
let sum = 0;
function addToCart() {
  sum++;
  const showSum = document.getElementById("showSum");
  showSum.textContent = sum;
}

// support-part-event
const supportIcon = document.getElementById("support-icon");

supportIcon.addEventListener("click", function () {
  const contentOption = document.querySelector(".content");
  contentOption.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  let openShopping = document.querySelector(".cart");
  let closeShopping = document.querySelector(".closeShopping");

  // Opening the shopping cart
  openShopping.addEventListener("click", () => {
    const checkOut = document.querySelector(".checkout");
    checkOut.classList.toggle("active");
  });

  // Closing the shopping cart
  closeShopping.addEventListener("click", () => {
    const checkOut = document.querySelector(".checkout");
    checkOut.classList.remove("active");
  });

  let productList = document.querySelectorAll(".product-list .product");
  let total = document.querySelector(".total");
  productList.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (event.target.classList.contains("btn-cart")) {
        let itemKey = item.getAttribute("data-key");
        let listCart = document.querySelectorAll(".checkout .item");
        let priceProduct = parseFloat(
          item.querySelector(".price-product .money").textContent
        );
        let isDuplicate = false;

        listCart.forEach((cart) => {
          if (cart.getAttribute("data-key") === itemKey) {
            isDuplicate = true;
            cart.classList.add("danger");
            setTimeout(function () {
              cart.classList.remove("danger");
            }, 1000);
          }
        });

        if (!isDuplicate) {
          let itemNew = item.cloneNode(true);
          total.textContent = (
            parseFloat(total.textContent) + priceProduct
          ).toFixed(2);
          itemNew.classList.add("item");
          let quantityControl = document.createElement("div");
          quantityControl.className = "quantity-control";
          quantityControl.innerHTML = `
            <button class="decrement">-</button>
            <span class="quantity">1</span>
            <button class="increment">+</button>
          `;
          itemNew.appendChild(quantityControl);
          document.querySelector(".checkout .listCart").appendChild(itemNew);
          itemNew.querySelector(".remove").addEventListener("click", (e) => {
            e.stopPropagation();
            removeItem(itemNew, priceProduct);
          });

          quantityControl
            .querySelector(".decrement")
            .addEventListener("click", () => {
              updateQuantity(itemNew, -1, priceProduct);
            });

          quantityControl
            .querySelector(".increment")
            .addEventListener("click", () => {
              updateQuantity(itemNew, 1, priceProduct);
            });
        }
      }
    });
  });
});

function updateQuantity(item, change, priceProduct) {
  let quantityElement = item.querySelector(".quantity");
  let quantity = parseInt(quantityElement.textContent);
  if (quantity + change > 0) {
    quantityElement.textContent = quantity + change;

    // Update total price
    const total = document.querySelector(".total");
    total.textContent = (
      parseFloat(total.textContent) +
      change * priceProduct
    ).toFixed(2);

    // Update sum and showSum
    sum += change;
    const showSum = document.getElementById("showSum");
    showSum.textContent = sum;
  }
}

function removeItem(item, priceProduct) {
  let quantity = parseInt(item.querySelector(".quantity").textContent);
  item.remove();
  sum -= quantity;
  const showSum = document.getElementById("showSum");
  showSum.textContent = sum;

  const total = document.querySelector(".total");
  total.textContent = (
    parseFloat(total.textContent) -
    priceProduct * quantity
  ).toFixed(2);
}

function updateQuantity(item, change, priceProduct) {
  let quantityElement = item.querySelector(".quantity");
  let quantity = parseInt(quantityElement.textContent);
  if (quantity + change > 0) {
    quantityElement.textContent = quantity + change;

    const total = document.querySelector(".total");
    total.textContent = (
      parseFloat(total.textContent) +
      change * priceProduct
    ).toFixed(2);

    sum += change;
    const showSum = document.getElementById("showSum");
    showSum.textContent = sum;
  }
}

function removeItem(item, priceProduct) {
  let quantity = parseInt(item.querySelector(".quantity").textContent);
  item.remove();
  sum -= quantity;
  const showSum = document.getElementById("showSum");
  showSum.textContent = sum;

  const total = document.querySelector(".total");
  total.textContent = (
    parseFloat(total.textContent) -
    priceProduct * quantity
  ).toFixed(2);
}
