# shadowlands-prepatch.herodamage.com
Shadowlands PrePatch (9.0) version of HeroDamage.

This website was created in order to serve Rogue Theorycrafting Resources and Simulation results before being extended to every classes.
Simulations are powered by [SimcScripts](https://github.com/Ravenholdt-TC/SimcScripts).

## Quick Start

### Prerequisites
Make sure to have the [Node.js](https://nodejs.org/) version referenced in the package.json (`engines` key) installed.  

If you use [NVM (Node Version Manager)](https://github.com/creationix/nvm) which is the recommended way to have Node.js installed, you can just do:
```
nvm use
```
And it will use the correct version (under the hood, it does use the `.nvmrc` file)

Also, make sure to have the latest stable version of the package manager of your choice ([npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)).  
For the rest of this quick start, we will use `npm`, and this is the package manager used by this project.

### Installation

You can then install all the dependencies with:
```
npm install
```

### Development Server

Then you can run the development server with:
```
npm run develop
```
You can now go to [http://localhost:8000/](http://localhost:8000/) to preview the changes.  
There is also [GraphiQL](https://github.com/graphql/graphiql), an in-browser IDE, available at [http://localhost:8000/___graphql](http://localhost:8000/___graphql) to help building the GraphQL queries.

### Production Build

If you want to see what the production build would looks like, you can with:
```
npm run build
```
Then check the `public` folder.

In addition, if you want to see the result in the browser, you can do:
```
npm run serve
```

## Contributing
This project follows [StandardJS](https://standardjs.com/) coding style using [ESLint](https://eslint.org/) linter.  
The main dependency is [GatsbyJS](https://www.gatsbyjs.org/) that does use [React](https://reactjs.org/), [GraphQL](https://graphql.org/), [webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/).  
We also use [LinguiJS](https://lingui.js.org/), [styled-components](https://www.styled-components.com/) and [material-ui](https://material-ui.com/).  
**Make sure to have the corresponding plugins (if available) in your IDE for a better support of those.**

## Contributors
- [Aethys](https://github.com/aethys256)
- [KutiKuti](https://github.com/kutikuti)
- [Mystler](https://github.com/Mystler)
- [Nianel](https://github.com/nianel)
