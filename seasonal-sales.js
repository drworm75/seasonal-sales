var productContainer = document.getElementById("product-container");
var selectSeason = document.getElementById("select-season");

var categories = [];
var products = [];
var products2 = [];

function createCategoriesArray() { // Step 2 (Departments first b/c it is a smaller file)
	var departmentData = JSON.parse(this.responseText);
	for (var i = 0; i < departmentData.categories.length; i++) {
		categories.push(departmentData.categories[i]); //building departmentArray

	}
		var myRequest2 = new XMLHttpRequest();
		myRequest2.addEventListener("load", parseProducts); //Move to step 3 createProductsArray
		myRequest2.addEventListener("error", executeThisCodeAfterFileFails);
		myRequest2.open("GET", "products.JSON");
		myRequest2.send();
	}

function parseProducts() {
	var data = JSON.parse(this.responseText);
		console.log(data); //building departmentArray
	for (var i = 0; i < data.products.length; i++) {
		products.push(data.products[i]);
}
	dataHandler(data);
}

function dataHandler(productsXHR){ // Begin step 3
	console.log(productsXHR);
	products.forEach(function(product){
		for (var i = 0; i < categories.length; i++) {
			if (product.category_id === categories[i].id) {
				product["category-name"] = categories[i].name;
				product["categorySeasonDiscount"] = categories[i].season_discount;
				product["category-discout"] = categories[i].discount;
				product["season-price"] = (product.price * (1.00 - categories[i].discount)).toFixed(2);
			}
		}
	})
		writeProductsToDom("Autumn");
};

function writeProductsToDom(season) {
		var productBuilder = "";
	for (var i = 0; i < products.length; i++) {
		productBuilder += `<div class="row">`
		productBuilder += `<div class="col-sm-9 col-md-6"><h3>${products[i].name}</h3>`
		if (season === products[i].categorySeasonDiscount) {
			productBuilder += `<div class="row"> <div class="col-xs-8 col-sm-6"><h4>${products[i]["season-price"]}</h4></div>`
		} else {
			productBuilder += `<div class="row"> <div class="col-xs-8 col-sm-6"><h4>${products[i].price}</h4></div>`

		}
		productBuilder += `<div class="col-xs-4 col-sm-6"><h4>${products[i].categorySeasonDiscount}</h4></div>`
		productBuilder += `</div></div></div>`
		productContainer.innerHTML = productBuilder
}

// function applyDiscount(season) {
// 	var setSalePricing = products2;
// 	var percentOff = 0;
// 	for (var i = 0; i < setSalePricing.length; i++) {
// 		if (season === setSalePricing[i].categorySeasonDiscount) {
// 			setSalePricing[i].price = setSalePricing[i].price * (1.00 - setSalePricing[i]["category-discout"]);
// 			setSalePricing[i].price = (setSalePricing[i].price).toFixed(2);
// 			console.log("setSalePricing", setSalePricing[i].price);
// 			console.log("products after discount", products);
// 			writeProductsToDom(setSalePricing);
// 		}
// 	}
		console.log(products[0].name);
	// for (var i = 0; i < products.length; i++) {
	// for (key in products) {
	// 	console.log(products);
	// 	// if (departmentArray[i][key] === season) {

	// 	// 	// var percentOff = departmentArray[i].discount;
	// 	// 	// for (var k = 0; k < currentPricing.length; k++) {
	// 	// 	// 	if(currentPricing[k].category_id === 3) {
	// 	// 	// 		currentPricing[k].price = currentPricing[k].price * (1.00 - percentOff);
	// 	// 	// 		currentPricing[k].price = (currentPricing[k].price).toFixed(2);
	// 	// 	// 		console.log(percentOff);
				
	// 	// 	// 	}
	// 	// 	// }
	// 	// }
	// // }

	// }
}




function executeThisCodeAfterFileFails() {
	console.log("File failed!");
}	

var myRequest = new XMLHttpRequest(); //step one
myRequest.addEventListener("load", createCategoriesArray); //Look at createCategoriesArray
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "departments.JSON");
myRequest.send();

selectSeason.addEventListener("change", function(event) {
  	console.log(event);
  	if (event.target.value === "Spring") {
		writeProductsToDom(event.target.value);
  	}
   	else if (event.target.value === "Autumn") {
		writeProductsToDom(event.target.value);
  	}
   	else if (event.target.value === "Winter") {
		writeProductsToDom(event.target.value);
  	} 	 	
  });

















































// var productContainer = document.getElementById("product-container");
// var selectSeason = document.getElementById("select-season")
// var departmentArray = [];
// var myRequest2 = new XMLHttpRequest();
// var productArray = [];

// function createProductArray(){ // Begin step 3
// 	var data = JSON.parse(this.responseText);
// 	createProductArray2(data);
// }

// function createProductArray2(data) {
// 	for (var i = 0; i < data.products.length; i++) {
// 		productArray.push(data.products[i]);
// 	}
// 	writeProductsToDom();
// }
// function createCategoriesArray() { // Step 2 (Departments first b/c it is a smaller file)
// 	var departmentData = JSON.parse(this.responseText);
// 	for (var i = 0; i < departmentData.categories.length; i++) {
// 		departmentArray.push(departmentData.categories[i]); //building departmentArray

// 	}
// 		myRequest2.addEventListener("load", createProductArray); //Move to step 3 createProductArray
// 		myRequest2.addEventListener("error", executeThisCodeAfterFileFails);
// 		myRequest2.open("GET", "products.JSON");
// 		myRequest2.send();
// 	}

// function writeProductsToDom() {
// 	for (var i = 0; i < productArray.length; i++) {
// 		var productBuilder = "";
// 		productBuilder += `<div class="row">`
// 		productBuilder += `<div class="col-sm-9 col-md-6"><h3>${productArray[i].name}</h3>`
// 		productBuilder += `<div class="row"> <div class="col-xs-8 col-sm-6"><h4>${productArray[i].price}</h4></div>`
// 		productBuilder += `<div class="col-xs-4 col-sm-6">`
// 		if (productArray[i].category_id === 1) {
// 			productBuilder += `<h4>Apparel</h4></div>`
// 		}
// 		else if (productArray[i].category_id === 2) {
// 			productBuilder += `<h4>Furniture</h4></dv>`
// 		}
// 		else if (productArray[i].category_id === 3) {
// 			productBuilder += `<h4>Household</h4></dv>`
// 		}


// 		productBuilder += `</div></div></div>`
// 		productContainer.innerHTML += productBuilder
// 		}
// }

// function applyDiscount(season) {
// 	var currentPricing = productArray;
// 	console.log("currentPricing", currentPricing);
// 	console.log("productArray", productArray[9].price);
// 	var percentOff = 0;
// 	productContainer.innerHTML = ""
// 	for (var i = 0; i < departmentArray.length; i++) {
// 	for (key in departmentArray[i]) {
// 		if (departmentArray[i][key] === season) {
// 			var percentOff = departmentArray[i].discount;
// 			for (var k = 0; k < currentPricing.length; k++) {
// 				if(currentPricing[k].category_id === 3) {
// 					currentPricing[k].price = currentPricing[k].price * (1.00 - percentOff);
// 					currentPricing[k].price = (currentPricing[k].price).toFixed(2);
// 					console.log(percentOff);
// 					// writeProductsToDom(currentPricing);
// 				}
// 			}
// 		}
// 	}
// 		console.log("productArray on exit", productArray[9].price);
// 		createDepartmentArray();

// 	}

// 		for (var x = 0; x < currentPricing.length; x++) {
// 		var productBuilder = "";
// 		productBuilder += `<div class="row">`
// 		productBuilder += `<div class="col-sm-9 col-md-6"><h3>${currentPricing[x].name}</h3>`
// 		productBuilder += `<div class="row"> <div class="col-xs-8 col-sm-6"><h4>${currentPricing[x].price}</h4></div>`
// 		productBuilder += `<div class="col-xs-4 col-sm-6">`
// 		if (currentPricing[x].category_id === 1) {
// 			productBuilder += `<h4>Apparel</h4></div>`
// 		}
// 		else if (currentPricing[x].category_id === 2) {
// 			productBuilder += `<h4>Furniture</h4></dv>`
// 		}
// 		else if (currentPricing[x].category_id === 3) {
// 			productBuilder += `<h4>Household</h4></dv>`
// 		}


// 		productBuilder += `</div></div></div>`
// 		// console.log(productBuilder)
// 		productContainer.innerHTML += productBuilder
// 		}
// 	}

	


// function executeThisCodeAfterFileFails() {
// }

// // document.addEventListener("onload", )

// selectSeason.addEventListener("change", function(event) {
//   	console.log(event);
//   	if (event.target.value === "Spring") {
//   		applyDiscount(event.target.value);
//   	}
//    	else if (event.target.value === "Autumn") {
//   		applyDiscount(event.target.value);
//   	}
//    	else if (event.target.value === "Winter") {
//   		applyDiscount(event.target.value);
//   	} 	 	
//   });

// var myRequest = new XMLHttpRequest(); //step one
// myRequest.addEventListener("load", createDepartmentArray); //Look at createDepartmentArray
// myRequest.addEventListener("error", executeThisCodeAfterFileFails);
// myRequest.open("GET", "departments.JSON");
// myRequest.send();





