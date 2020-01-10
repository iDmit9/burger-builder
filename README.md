# Burger Builder

This is a React web application. Built using technologies such as Redux, Redux Thunk, React Router. For storage and authentication is used Firebase.

> You can view [live demo](https://react-my-burger-f1737.web.app/)

![App home](/image-home.png)

The application allows you to create a custom burger of four ingredients. At start, the amount of ingredients in the base burger is loaded from the Firebase. To order you need to login.

To login in demo app you can use:
> E-Mail: test@test.com
> Password: password

The ability to login is implemented using Firebase with the "Email address and password" login method. After logging in, authentication parameters are stored in localStorage and are deleted from there after expiration time. All orders are stored in the database and each user can see their orders by clicking "Orders" in the menu.

![App orders](/image-order.png)

When placing an order, validation is implemented and each field will be highlighted in red if it does not comply with the rules.

---
### Firebase database rules

In order for the user who entered the application to be able to receive a basic set of ingredients from the database, but could not view orders until he logs in, the following set of database rules is implemented:

```json
{
  "rules": {
    "ingredients": {
      ".read": true,
    	".write": true
    } ,   
    "orders": {
      ".read": "auth != null",
      ".write": "auth != null",
        ".indexOn": ["userId"]
    }
  }
}
```

---
### env.js variables

A file with global variables was created. In which the path to the database and the API key for authentication are added.

This file allows you to:

 - When creating a new database, add the path to this file and it will already be used throughout the application.
 - Add a private variable and then use it in the application. And when you upload the file to the public repository, you add this file to the .gitignore. It’s worth remembering that in the front-end application this does not provide complete security, but since the application requests a token via https this gives us some security and the code cannot be cracked simply by copying the key from the GitHub.

---

### Work with Repo


After downloading the repository, install all the dependencies with the command:
   ```
   npm install
   ```
   
Rename the template.env.js file to env.js and add valid variable values. 

This application bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and a set of scripts is available to you. In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the Create React App section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

>Technology stack:
>React, Redux, Redux Thunk, React Router, Axios, Firebase