# Burger Builder

This is a React with Hooks web application. Built using technologies such as Redux, Redux Thunk, React Router. For storage and authentication is used Firebase.

> You can view [live demo](https://react-my-burger-f1737.web.app/)


Image with absolute path
![App previews](https://raw.githubusercontent.com/iDmitriy-dev/burger-builder/master/burger_home.jpg)

Image with relative path
![App previews](master/burger_home.jpg)

This application bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.




---
firebase rules

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