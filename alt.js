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