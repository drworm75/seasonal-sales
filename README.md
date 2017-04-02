![Title Banner](https://raw.githubusercontent.com/drworm75/seasonal-sales/master/images/seasonal-sales-readme-banner.png) 
### Requirements

* Build a web page that lists all the products, the name of the department it's in, and the price from a JSON file.

* Put a select element at the top of the page that contains all possible values of the season_discount key in the categories JSON file. 

* As soon as you select one of the seasons, items that are on sale that season should immediately have their prices changed to the sale price. (For example, when Spring is chosen, all products in the corresponding Household category should have their prices updated with a 15% discount off the base price.)

### Final Result:
> A minimalist web page that produces the required result. 


![Page Screenshot](https://raw.githubusercontent.com/drworm75/seasonal-sales/master/images/seasonal-sales-screenshot.png)

### Take-home Lesson:

> I tried a few different paths on this assignment.  Working with the info directly from the JSON file seemed to over complicate the code.  Attempted to write a function to calculate the discount price, but it kept overwriting my global variable, and I'm still not sure why.  At the end of the day, the product works as advertised, so I had to move on.


### How to run (Node must be installed on your machine):
“`
git clone https://github.com/drworm75/seasonal-sales.git
cd seasonal-sales.git
npm install http-server -g
http-server -p 8080
“`

This will show in your browser at:
`http://localhost:8080`

### Contributors:
[Dwayne Pate](https://github.com/drworm75)
