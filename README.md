# Apna-business-API <br>
**1) Web app Installation** <br>
=> download the repo or git clone <br>
=> from the terminal get inside the folder <br>
=> run command *"npm install"* this commmand will install the required dependencies

**2)APIs** <br>
Auth APIs <br>
=> *Login API* (/api/auth/login) this returns the jwt token on success which will be used further for authorization and authenticaiton <br>
=> *Register API* (/api/auth/register) it takes the following input (userName, password, category: buyer/seller) and stores it into the database and returns the jwt token <br><br>
Buyer APIs <br>
=> *Get list of sellers* (/api/buyer/list-of-sellers) this returns the list of all the sellers<br>
=> *Get catalog of a seller* (/api/buyer/seller-catalog/:seller_id) this returns the catalog of a particular customer<br>
    Replace the {:seller_id} with the id of seller you'll get by using *Get Sellers* API.<br>
=> *Give Order* (/api/buyer/create-order/:seller_id) this gives order of a particualr item to that seller<br>
    In the body of the request -> change it to JSON type -> enter this in the body *"{ "productName": "/NameOfTheProduct/" }* and replace /NameOfTheProduct/ with an actual product name from the seller's catalog and replace the {:seller_id} with the id of seller you'll get by using *Get Sellers* API.<br><br>
Seller APIs <br>
=> ***Before using any Seller API, you have to pass jwt token is header for verification***<br>
   a) Create a header of "Authorization" with values "Bearer /token/" replace /token/ with the token you got while loging in or registering.<br>
   b) use the follwing APIs as explained.<br>
=> *Create Catalog* (/api/seller/create-catalog) here seller can enter the products he wants to sell it return the catalog containing products<br>
   a) In the body the request -> change it to JSON type -> enter this in the body *{"productName":"/NameOfTheProduct/", "productPrice":"/PriceOfTheProduct/"}* and replace /NameOfTheProduct/, /PriceOfTheProduct/ with actual Name and Price.<br>
=> *Get Orders* (/api/seller/orders) it return a list of productName ordered by buyers.
