var productContainer = document.getElementById("product-container");
var departmentArray = [];
var productArray = [];
var combinedArray = [];
var myRequest2 = new XMLHttpRequest();

function createProductArray(){
	var data = JSON.parse(this.responseText);
	for (var i = 0; i < data.products.length; i++) {
		productArray.push(data.products[i]);
		for (var i = 0; i < productArray.length; i++) {
			for (var j = 0; j < departmentArray.length; j++) {
				if (productArray[i].category_id === departmentArray[j].id) {
					for (key in departmentArray[j]) {
					productArray[i][key] = departmentArray[j][key]
					}
				}
			}
		}		
	}
					console.log(productArray);
}

function createDepartmentArray() {
	var departmentData = JSON.parse(this.responseText);
	for (var i = 0; i < departmentData.categories.length; i++) {
		departmentArray.push(departmentData.categories[i]);

	}
		myRequest2.addEventListener("load", createProductArray);
		myRequest2.addEventListener("error", executeThisCodeAfterFileFails);
		myRequest2.open("GET", "products.JSON");
		myRequest2.send();
	}

	// for (var i = 0; i < xhrData.products.length; i++) {
	// 	var productBuilder = "";
	// 	productBuilder += `<div class="row">`
	// 	productBuilder += `<div class="col-sm-9 col-md-6"><h3>${xhrData.products[i].name}</h3>`
	// 	productBuilder += `<div class="row"> <div class="col-xs-8 col-sm-6"><h4>${xhrData.products[i].price}</h4></div>`
	// 	productBuilder += `<div class="col-xs-4 col-sm-6"><h4>${xhrData.products[i].category_id}</h4></div>`
	// 	productBuilder += `</div></div></div>`
	// 	productContainer.innerHTML += productBuilder
	// 	}

function executeThisCodeAfterFileFails() {
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", createDepartmentArray);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "departments.JSON");
myRequest.send();





