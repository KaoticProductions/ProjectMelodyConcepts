A React Redux Example
=====================

A very lightweight example with most of the bare minimum to get started.

Normally, I dislike boilerplates because they inherently assume some baseline
knowledge about the frameworks and don't provide enough of those resources back
to help one understand. By the time one parses and understands the framework,
they could have made their own boilerplate.

Here, I'll summarize the tooling used, and every package installed in hopes of
helping clarify the landscape.

Usage
=====

Some common starts:

    npm install
    npm run test
    npm run start # Starts a local server
    npm run build # Performs a dev build into dist

All other commands can be found in `package.json` under `scripts`.

Architecture Summary
====================

This app uses the **React** framework to render frontend components. It uses
the **Redux** framework to handle state management. A connecting library,
**React-Redux** helps connect the two together so that the application state
can properly be linked with the frontend view.

**Mocha** is used as the testing framework along with **Chai** as a simple
assertion library.

In order to use a lot of the ES6 goodness along with JSX, **Babel** is used as
a transpiler so that the code can all be written in ES6 JSX, but compiled back
down to ES5 Javascript.

Everything is built with **Webpack**.

Framework Gotchas
=================

Most of the boiler plate code demonstrates the use of the framework and
utilizes in some way the packages that are provided. However, there is one
aspect of the framework that may be confusing, but is essential for proper
design of your codebase.

This is the concept of React "containers" vs. React "components". These
articles do a better job of describe the differences:

1. [The differences](https://goo.gl/I1bQHa)
2. [Clarifications](https://goo.gl/YLVi9B)

React-Redux Unidirectional Data Flow
====================================

Data flows in a way that matches the codebase:

1. Actions in `actions.jsx` provide provide "events" that the application
   can respond to.
2. The reducer in `reducers.jsx` takes the application state and an action
   to create a new application state.
3. The containers in `/containers` observe changes in application state to
   update the corresponding components.
4. The components in `/components` rerender depending on the state change.
   Components can also then generate more actions to start the cycle over.

The only other interesting file is `index.jsx` at the root that handles
bootstrapping the application and gluing everything together.

Package Details
===============

#### babel-core

The core babel library. Provides the NodeJS library to transpile things. Uses
the `.babelrc` file to configure its settings.

#### babel-loader

Webpack uses loaders to compile code as it builds it. This provides the babel
loader so that babel can be used when building.

#### babel-plugin-transform-object-rest-spread

The babel core provides the core library, but plugins are required to specify
how to transpile. This one provides the [spread operator](https://goo.gl/inzydZ)
in ES6.

#### babel-preset-es2015

A collection of plugins is known as a preset to make it easier to install the
bundle. This one provides plugins to support most ES6 features. The full
feature list is [here](https://babeljs.io/docs/plugins/preset-es2015/)

#### babel-preset-react

This preset provides plugins to support Flow types and JSX, as well as
transforming JSX into React createElement calls.

#### babel-register

Similarly to how webpack uses loaders, mocha uses registers to compile tests.
This provides the register.

#### chai

An assertion library that can be used with mocha.

#### file-loader

Another loader for webpack. This one allows files to be copied directly instead
of compiled in some way.

#### mocha

The mocha testing framework.

#### node-inspector

A useful NodeJS library that pops up the debugger in a Chrome window when
debugging.  This is currently used to wrap mocha testing when debugging is
required. Simply drop a debugger statement and run node inspector to debug!

#### react-addons-test-utils

React provides a few utilities when it comes to testing React components.
These are them!

#### react-hot-loader

This allows react to be properly hot loaded with webpack. When running
webpack-dev-server, hot module replacement can be enabled so that React
components can be loaded in place instead of refreshing the page.

#### webpack

Our build tool. It builds things. Uses the webpack config files to configure
different builds. It handles discovering files, resolving imports, and
transpiling.

#### webpack-dev-server

A useful utility with our build tool that lets you run builds with a simple
local server.

#### react

The frontend component library.

#### react-dom

This was recently split into its own separate library. This is the library
glue between react and the actual DOM.

#### react-redux

This is a helper library that acts as the glue between React components and
Redux.

#### redux

And this is redux, our backend state management framework.
