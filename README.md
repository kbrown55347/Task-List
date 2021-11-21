# Task Manager

## Description
---

Duration: 2 days

<!-- Directly above this is how long it took you to develop the project. Your project description goes here. What problem did you solve? How did you solve it? -->

<!-- I created an application that takes in two numbers and performs a calculation.

To accomplish this, I first created a basic html application layout with two input fields, buttons for addition, subtraction, multiplication and division, an equals button, a 'C' button, an area to display the result from the current calculation and an area to display a list of previous calculations. I then added functionality on the client side to capture the input number values and the selected operation sign on the click of the '=' button. I then routed that information to be bundled and sent to the server side. Next, on the server side, I created a function to perform a calculation based on the information that was received. Then I created a function to bundle the input numbers, operator and answer in an object and then pushed that object to an array. Next, I wired that information to be sent to the client side and there I created a function to display the result of the current calculation and a history of all the previous calculations. Lastly, I created a function on the client side to clear the input number fields on the click of the 'C' button. -->

## Screen Shots
---

#### Image 1
![alt text](images/unchecked.png)

#### Image 2
![alt text](images/checked.png)

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)

## Installation

- Run 'npm init --yes' in terminal to create package.json file and to install node modules
- Run 'npm install express' in terminal to install express library
- Run 'npm install pg' in terminal
- Run 'npm start' to start server
- Create database in SQL named 'weekend-to-do-app'. Use the code from the 'database.sql' file in the repository and to create table in 'weekend-to-do-app' database.


<!-- How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example -- Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the .env file.

Create a database named your database name,
The queries in the tables.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
Open up your editor of choice and run an npm install
Run npm run server in your terminal
Run npm run client in your terminal
The npm run client command will open up a new browser tab for you! -->

## Usage
---

<!-- How does someone use this application? Tell a user story here. -->

<!-- 1. Enter a number into each input field and select the desired operator.

2. Click the '=' button to perform the calculation and to have the result displayed beneath the input fields. All previous calculations and their results will be listed under 'Previous Calculations'.

3. To clear the input fields, click the 'C' button. -->

## Built With
---

<!-- List technologies and frameworks here -->

- HTML
- CSS
- JavaScript
- jQuery
- Node.js
- Express.js
- PostgreSQL
- Postico

## Acknowledgment
---

Thank you to Prime Digital Academy, my instructor and my classmates who equipped and helped me to make this application.

## Support
---

If you have suggestions or issues, please email me at kbrown55347@gmail.com