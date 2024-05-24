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

// show-up-more-details
document.addEventListener("DOMContentLoaded", function () {
  const showMoreButtons = document.querySelectorAll(".more-details");
  const closeDetailsButtons = document.querySelectorAll(".close-details");

  showMoreButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const wrapperTitle = button.closest(".wrapper-title");
      const detailsOption = wrapperTitle.nextElementSibling;
      const closeButton = wrapperTitle.querySelector(".close-details");

      if (detailsOption && closeButton) {
        detailsOption.classList.add("active");
        closeButton.classList.add("active");
        button.classList.add("hidden");
      }
    });
  });

  closeDetailsButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const wrapperTitle = button.closest(".wrapper-title");
      const detailsOption = wrapperTitle.nextElementSibling;
      const moreButton = wrapperTitle.querySelector(".more-details");

      if (detailsOption && moreButton) {
        detailsOption.classList.remove("active");
        button.classList.remove("active");
        moreButton.classList.remove("hidden");
      }
    });
  });
});
