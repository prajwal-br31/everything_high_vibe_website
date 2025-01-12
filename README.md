E-commerce website

See the hosted application [Hosted on AWS ] - https://everythinghighvibe.com/ 

#### This application, built using MERN Stack and servers as an e-commerce website.
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

### Setup for Mac

1. Clone the git repository

   ```
    git clone https://github.com/prajwal-br31/everything_high_vibe_website
    ```
   
3. In a command window, cd to root folder of this project and ensure dependencies are installed

    ```
    npm install
    ```

4. Add ENV files

    ```
    Create `.env` file for both client and server. See examples:
*    [In /client folder add .env ](client/.env.example)
*    [In /server folder add .env](server/.env.example)
    ```

5. Make sure mongodb server is started and then run db seed command ( give username and password )

    ```
    npm run seed : db [adminUsernmae] [password]
    ```
6. Start development by giving the command
   
    ```
    npm run dev
    ```

You can then view the demo application in a browser at localhost:8080.

Backend API server is running at localhost:3000.

## Deploying changes into AWS

1. ssh into the EC2 instance with the key
    ```
        ssh -i AWSKey.pem ec2-user@your.public.IP.address
    ```

2. Install the dependencies like node and pm2. Start pm2 process seperately for client and server
    ```
        git clone https://github.com/prajwal-br31/everything_high_vibe_website
        cd everything_high_vibe_website
        npm install
        <!--  Add .env files for client and server -->
        <!-- Start the client production server -->
        cd client
        npm run build
        <!-- This creates a build folder dist/ -->
        pm2 serve dist 8080 --name "client_server"
        <!-- Client is now running at http://your.public.ip.address:8080 ( Make sure to allow traffic for port 8080 in ec2 instace security groups ) -->
        <!-- Cd into server/ folder -->
        cd ../
        cd server
        pm2 start index.js
        <!-- API server is now running at http://your.public.ip.address:3000 -->
        <!-- Save pm2 and enable startup on reboot before logging out -->
        pm2 save
        pm2 startup
        logout
    ```


