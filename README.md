<div align="center">
<h1>Solar Terminal</h1>
<h4>Solar panel monitoring application built on top of <a href="https://react.dev/" target="_blank">React</a></h4>
</div>

<div align="center">
  <h3>
    <a href="https://nodejs.org/en" target="_blank">
      Node.js
    </a>
    <span> | </span>
    <a href="https://react.dev/" target="_blank">
      React
    </a>
    <span> | </span>
    <a href="https://nextjs.org/" target="_blank">
      Next.js
    </a>
    <span> | </span>
    <a href="https://chakra-ui.com/" target="_blank">
      Chakra UI
    </a>
    <span> | </span>
    <a href="https://tanstack.com/query/latest/docs/framework/react/overview" target="_blank">
      React Query
    </a>
    <span> | </span>
    <a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank">
      React Testing Library
    </a>
    <span> | </span>
    <a href="https://cypress.io/" target="_blank">
      Cypress
    </a>
  </h3>
</div>

> Solar terminal is a monitoring dashboard built over **React** to monitor status of panels in farm. It uses Next.js API routes for providing API for updates.

<details>
<summary>📖 <b>Table of Contents</b></summary>
<br />

[![-----------------------------------------------------][colored-line]](#table-of-contents)

## ➤ Table of Contents

* [➤ Walkthrough](#walkthrough)
    * [Built With](#built-with)
    * [File Structure](#file-structure)
    * [Testing Setup](#testing-setup)
* [➤ Getting Started](#-getting-started)
    * [Dependencies](#dependencies)
    * [Install Node.js](#install-nodejs)
    * [Check your Node.js installation](#check-your-nodejs-installation)
    * [Installing](#installing)
    * [Running the App](#running-the-app)
    * [Tasks](#tasks)
</details>

[![-----------------------------------------------------][colored-line]](#installation)

## ➤ Walkthrough


### Built With

- [Node.js](https://nodejs.org/en/)
- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [React Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Cypress](https://cypress.io/)


### File Structure

```
src/
 ├──app/                   * Next.js app router folder. It contains pages
 │   |--layout.tsx         * Defines shared layout for routes
 │   |--page.tsx           * Main dashboard page
 │   │──providers.tsx      * Set up Chakra UI theme
 │   │
 │──components/            * Contains app components
 │   ├──Overview/          * Overview dashboard component
 │   └──SolarGrid/         * Component to display panels in grid
 |──hooks/                 * Contains React hook for fetching grid data updates
 │
 |──pages/                 * Contains Next.js API routes for providing panel data updates
 │
 |──public/                * Contains public assets
 │
 |──test/                  * Jest configuration for testing application
 |
 └──utilities/             * Utilities for generating data for panels
```

### Testing Setup
This is our testing stack:
* React Testing Library
* Jest
* Cypress
* Eslint

To run unit and integration tests, type `npm test` in the terminal. To run E2E tests, type `npm run test:e2e` in the terminal.


[![-----------------------------------------------------][colored-line]](#installation)

## ➤ Getting Started

### Dependencies
Tools needed to run this app:
* `node` and `npm`

#### Install Node.js

Node.js is an environment that can run JavaScript code outside of a web browser and is used to write and run server-side JavaScript apps. Node.js installation includes `npm`, the package manager that allows you to install NPM modules from your terminal.
You can download an installer from the [Node.js homepage](https://nodejs.org/en/).

##### Check your Node.js installation

Check that you have the minimum required version installed by running the following command:

```sh
node -v
```

You should see a version larger than Node 18.

```sh
node -v
v18.19.0
```

> Solar terminal minimum supported Node.js version is Node 18, but more recent versions will work as well.


### Installing
* `clone` this repo
* `npm install` to install dependencies

> Once all dependencies are installed, `husky` will setup Git hooks which will automatically execute build and testing on commit to make sure everything is working.

### Running the App
After you have installed all dependencies, you may run the app. Running `npm run dev` will launch a development server, and watch all files. The port will be displayed in the terminal.

#### Tasks
Here's a list of available tasks:
* `npm run lint`
    * runs linting with Eslint to verify code styles and formatting.
* `npm run dev`
    * starts a dev server via `Next.js`.
* `npm run build`
    * builds production build of the application.
* `npm run export` Builds and exports static version of the application.
* `npm start`
    * runs the production build of the application.
* `npm test`
    * runs the testing.
* `npm run test:e2e`
    * runs the E2E testing with Cypress.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[colored-line]: ./.docs/aqua.png
