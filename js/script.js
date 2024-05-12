// index part
const searchIcon = document.getElementById("search-icon");

searchIcon.addEventListener("click", function () {
  const searchForm = document.querySelector('.form-search');
  searchForm.classList.toggle('active');
});

const userIcon = document.getElementById("user-icon");

userIcon.addEventListener("click", function () {
  const userForm = document.querySelector('.form-login');
  userForm.classList.toggle('active');
});