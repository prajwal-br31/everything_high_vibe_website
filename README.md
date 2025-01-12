E-commerce website

See the hosted application demo [Hosted on AWS ] - https://everythinghighvibe.com/ 

This application, built using MERN Stack, servers as an e-commerce website.

Some of the features include:

  * Role based login for users and admins.
  * Admins can add products, brands and categories. They can view all orders and update status, approve or reject reviews.
  * Users can shop based on category of products or brands, search and filter based on price or rating. Users can wishlist and place order. They can also leave reviews on products.
  * Email is sent upon user registration, order confirmation and upon contact page submit.

Tech stack used for the website : 
  * Node provides the backend environment for this application
  * Express middleware is used to handle requests, routes
  * Mongoose schemas to model the application data
  * React for displaying UI components
  * Redux to manage application's state


## Installation steps

Step 1 : CLone the repository and cd into the folder  
* Step 2 : npm install
* Step 3 : Add ENV files
* Create `.env` file for both client and server. See examples:
*  [In /client folder add .env ](client/.env.example)
*  [In /server folder add .env](server/.env.example)
* Step 4 : run db seed command - npm run seed : db [adminUsernmae] [password] (It creates a db with admin username and password)
* Step 5 : Start development - npm run dev

