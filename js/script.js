// JavaScript for responsive menu and dropdowns

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelector(".nav-links");
  const dropdownMenus = document.querySelectorAll(".dropdown-menu");

  // Toggle dropdown menu visibility
  navLinks.addEventListener("click", (e) => {
    const isDropdownTrigger = e.target
      .closest("li")
      .querySelector(".dropdown-menu");

    if (isDropdownTrigger) {
      e.preventDefault();
      isDropdownTrigger.classList.toggle("visible");
    } else {
      dropdownMenus.forEach((menu) => {
        menu.classList.remove("visible");
      });
    }
  });

  // Hide dropdown menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target)) {
      dropdownMenus.forEach((menu) => {
        menu.classList.remove("visible");
      });
    }
  });
});
