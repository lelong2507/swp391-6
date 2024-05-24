// index-part-even
const searchIcon = document.getElementById("search-icon");

searchIcon.addEventListener("click", function () {
  const searchForm = document.querySelector(".form-search");
  searchForm.classList.toggle("active");
});


// user-icon-event
const userIcon = document.getElementById("user-icon");

userIcon.addEventListener("click", function () {
  const userForm = document.querySelector(".form-login");
  userForm.classList.toggle("active");
});

// support-part-event
const supportIcon = document.getElementById("support-icon");

supportIcon.addEventListener("click", function () {
  const contentOption = document.querySelector(".content");
  contentOption.classList.toggle("active");
});
