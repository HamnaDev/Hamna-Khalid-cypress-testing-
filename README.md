This project is created for **Assignment 1**, where I used **Cypress** to test the [SauceDemo website](https://www.saucedemo.com). I used **Page Object Model (POM)** and **custom commands** to write clean and reusable code.

## 📋 What This Project Covers
-  Test for correct login: Login works using a custom command `cy.login()`.
-  Click on a product: Goes to the product detail page.
- Page Object Model (POM): Each page has its own file (e.g., loginPage, inventoryPage).
-  Custom Command: A function called `cy.login()` is used to avoid repeating login steps.
-  
Install Dependencies:
          npm install
Open Cypress Test Runner:
         npx cypress open
