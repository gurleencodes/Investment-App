# Investment App

A Vue 3 investment dashboard prototype with routes for an overview, stocks, cryptocurrency, real estate, and commodities. The project also includes a Capacitor iOS shell.

## Current status

The dashboard uses hardcoded sample investment data. It is a frontend prototype; live market data and account persistence are not implemented.

## Stack

- Vue 3 and Vue Router
- Vite
- Capacitor for the iOS project

## Run locally

Use Node.js 22.12+ or 24 LTS and npm.

```sh
git clone https://github.com/gurleencodes/Investment-App.git
cd Investment-App
npm ci
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

When deploying the web build, configure the host to serve `index.html` for application routes because the router uses HTML5 history.

## iOS

Requires macOS and Xcode. After installing dependencies:

```sh
npm run build
npx cap sync ios
npx cap open ios
```

## Structure

```text
src/
  components/    Investment cards, sidebar, and modal components
  views/         Overview and asset category pages
  router.js      Application routes
  main.js        Vue entry point
  main.css       Shared styles
public/          Static assets
ios/             Native Capacitor iOS project
```

## Repository maintenance

Dependencies are installed from `package-lock.json` using `npm ci`. Keep `node_modules`, build output, local environment files, and editor-specific settings out of version control. Dependencies previously committed to this repository were removed from the current tree; earlier commits retain their history.
