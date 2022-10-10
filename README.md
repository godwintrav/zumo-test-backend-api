# zumo-test-backend-api

How to setup the project locally in your system.

1. Pull the repository to your system using Git.

2. open the root directory in the terminal and run the command: npm install.
This command will install all the required pacakages needed for the application to work smoothly.
Node.js is needed to run this command if you do not have node installed go to this URL to download node.js: https://nodejs.org/en/download/

3. Next, start the application in your system, you can either start in development or start it normally.
To start the application in development run this command in the terminal: npm run dev.
This command will start the application using nodemon. you need to install nodemon to run the application in development mode: npm install -g nodemon

To start the application normally run the command: npm start.
This will start the application in localhost port 3000.

4. open http://localhost:3000/ in your browser, then type in the endpoint for querying the smart contract: /dex
The url will look like this in your browser: http://localhost:3000/dex
