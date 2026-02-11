# WPNuxt Minimal Starter

[![WPNuxt](https://img.shields.io/badge/Made%20with-WPNuxt-BAAF4E?logo=wpnuxt&labelColor=020420)](https://wpnuxt.com)

Minimal WPNuxt starter with plain CSS and a WordPress Playground blueprint. No UI framework, no Tailwind — just `@wpnuxt/core` and three pages.

- [Documentation](https://wpnuxt.com/getting-started/installation)
- [Launch WordPress Playground](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/wpnuxt/starter-minimal/main/blueprint.json) - spin up a WPGraphQL-ready WordPress instance in your browser

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

To start the development server on `http://localhost:3000` you have two options:

- if you already have a WordPress site running and installed the WPGraphQL plugin, run:
    ```bash
    pnpm dev
    ```

- if you want to use the blueprint server to spin up a WordPress site in your browser, run:
    ```bash
    pnpm dev:blueprint
    ```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://wpnuxt.com/deploy/vercel) for more information.
