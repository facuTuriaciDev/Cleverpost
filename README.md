# Cleverpost

Mini-application with React and Typescript for list, edit or create posts.

## Description of views

### `Login`
URL: /

This is a login view, in order to access you will have to enter the correct username and password.

#### user: admin
#### password: admin

### `Home`
URL: /home

This view has a protected path, so you will only be able to access it if you have been able to log in successfully.

In the home view, a list of 100 posts is displayed. The user can filter the publications by title, content or by the name of its author. 
You can also edit and create new posts, and furthermore, you can switch between light or dark theme in the app.

## Scripts

### `npm start`
Run the app in development mode at  http://localhost:5173/

### npm `run build`
Build the application for production in the build folder.
Optimize the build for best performance.

### npm `run test`
Run the tests of the app created with Vitest

## Resources
* {JSON} Placeholder: https://jsonplaceholder.typicode.com

## Languages
* HTML: https://developer.mozilla.org/es/docs/Web/HTML
* SaSS: https://sass-lang.com/
* Javascript: https://developer.mozilla.org/es/docs/Web/JavaScript
* Typescript: https://www.typescriptlang.org/
* React: https://es.reactjs.org/
* Axios: https://axios-http.com/es/docs/intro
* Redux Toolkit: https://redux-toolkit.js.org/
* Vite: https://vitejs.dev/
* Vitest: https://vitest.dev/
* i18next: https://react.i18next.com/
