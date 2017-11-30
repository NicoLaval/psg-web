# PoC Survey Generator - Web

This project allows to display survey forms in a web app thanks to the plugin [generated-survey](https://github.com/NicoLaval/generated-survey).

It was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Installation

```sh
git clone https://github.com/NicoLaval/psg-web.git
cd psg-web
yarn
```  

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>

The page will reload if you make edits.<br>

A node [Restify](https://github.com/restify/node-restify) server will be emulated on `http://localhost:9999` to simulate the behavior of the back-end.<br>
Mock data can be changed in the `/back-end-api` folder (requiring to restart the server if it is already running).

### `yarn run build`

TODO : make the ws adress as an env in the build script
