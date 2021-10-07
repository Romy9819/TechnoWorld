const searchButton = document.querySelector("nav .desktop-nav .search");
const closeButton = document.querySelector(".search-container .close-search");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
	desktopNav.classList.add("hide");
	searchContainer.classList.remove("hide");
	overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
	desktopNav.classList.remove("hide");
	searchContainer.classList.add("hide");
	overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
	desktopNav.classList.remove("hide");
	searchContainer.classList.add("hide");
	overlay.classList.remove("show");
})

//Mobile 

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
	navContainer.classList.toggle("active");
})