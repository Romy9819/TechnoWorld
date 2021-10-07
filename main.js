$(document).ready(function() {
   	$(".click1").click(function() {
   		$(".hidden1").show("slow");
   		$(".click1").hide("fast");
   	});
   	$(".click2").click(function() {
   		$(".hidden2").show("slow");
   		$(".click2").hide("fast");
   	});
   	$(".click3").click(function() {
   		$(".hidden3").show("slow");
   		$(".click3").hide("fast");
   	});
   	$(".click4").click(function() {
   		$(".hidden4").show("slow");
   		$(".click4").hide("fast");
   	});
   	$(".click5").click(function() {
   		$(".hidden5").show("slow");
   		$(".click5").hide("fast");
   	});
   	$(".click6").click(function() {
   		$(".hidden6").show("slow");
   		$(".click6").hide("fast");
   	});
   	$(".click7").click(function() {
   		$(".hidden7").show("slow");
   		$(".click7").hide("fast");
   	});
   		$(".click8").click(function() {
   		$(".hidden8").show("slow");
   		$(".click8").hide("fast");
   	});
   	$(".click9").click(function() {
   		$(".hidden9").show("slow");
   		$(".click9").hide("fast");
   	});
   	$(".click10").click(function() {
   		$(".hidden10").show("slow");
   		$(".click10").hide("fast");
   	});
});

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

