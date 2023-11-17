// ==================================
// 1. Toggle humbugger menu;
// By default, the .link tag should
// display none.
// ==================================
const linkEl = document.querySelector(".link");
const hamburgerEl = document.querySelector(".hamburger");

const productTab = document.querySelector(".tabset");
const catalogue = document.querySelectorAll(".catalogue");
const search = document.querySelector(".search_product");

const itemNotFoundEl = document.getElementById("itemNotFound");

linkEl.style.display = "none";

hamburgerEl.addEventListener("click", function () {
	linkEl.style.display = linkEl.style.display === "none" ? "block" : "none";
});
// ==================================

// 2. Display products based on
// All, Men or Female categories.
// ==================================

productTab.addEventListener("change", (e) => {
	const selectedTabValue = e.target.value; // To fetch the value of the selected tab
	let foundItems = false; // To check if any items are found

	// Loop through each item checking through all items with the class 'catalogue'
	catalogue.forEach((item) => {
		const itemTag = item.querySelector(".tag").textContent; // Get the tag text value

		// Check if the selected tab is 'All' or the item's tag matches the selected tab value
		if (selectedTabValue === "All" || itemTag === selectedTabValue) {
			item.style.display = "block"; // Show the item
			foundItems = true; // Set to true since at least one item is found
		} else {
			item.style.display = "none"; // Hide the remaining item
		}
	});
	// Show or hide the "Item not found" message
	itemNotFoundEl.style.display = foundItems ? "none" : "block";
});
// ==================================

// 3. Display products based on
// search keywords in the input fields.
// ==================================

search.addEventListener("input", (e) => {
	const searchValue = e.target.value.toLowerCase(); // Convert input value to lowercase for case-insensitive comparison
	let itemFound = false; // To track if any item is found

	// Loop through each item in the catalogue
	catalogue.forEach((item) => {
		const productTitle = item.querySelector("p").textContent.toLowerCase(); // Get the product title text value and convert to lowercase

		// To check if the search value is present in the product title
		if (productTitle.includes(searchValue)) {
			item.style.display = "block"; // Show the item
			itemFound = true; // Set the flag to true
		} else {
			item.style.display = "none"; // Hide the remaining item if none matches
		}
	});

	// Show or hide the "Item not found" message
	itemNotFoundEl.style.display = itemFound ? "none" : "block";
});

//STYLING not found message
itemNotFoundEl.style.color = "red";
itemNotFoundEl.style.fontSize = "25px";
itemNotFoundEl.style.textAlign = "center";
itemNotFoundEl.style.margin = "5em";
