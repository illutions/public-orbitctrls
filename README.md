# Illutions Engine Orbit Controls Example

A minimal TypeScript and Three.js example demonstrating orbit controls, automatic
camera rotation, glTF model loading, environment lighting, and the Illutions
Engine GUI using the WebGL renderer.

## Requirements

- Node.js `^20.19.0` or `>=22.12.0` and npm
- A browser with WebGL support

## Installation

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application is served over HTTPS at:

```text
https://localhost:5173
```

The browser may display a warning because the development server uses a local
self-signed certificate.

## Type checking

```bash
npx tsc --noEmit
```

## Build

Create a production build:

```bash
npm run build
```

The generated files are written to `dist/`.

## Preview

Preview the production build locally:

```bash
npm run preview
```

## License

The example application code in this repository may be used, modified, and
distributed for private, non-commercial, and commercial projects.

The illutions Engine and illutions-provided build tooling are proprietary
software and are licensed separately. Their complete licensing terms are
provided with the [illutions package on npm](https://www.npmjs.com/package/illutions).
The included `license.json` determines the build permissions defined by that
license.

Engine and bundled dependency licenses are also included in `dist/licenses.md`
when creating a production build.

This permission does not relicense the illutions Engine, illutions branding,
illutions-provided build tooling, or the third-party assets listed below.

## Deployment

The included GitHub Actions workflow automatically builds and deploys the
project to GitHub Pages on every push to the `main` branch. It can also be
started manually from the Actions tab.

In the repository settings under **Pages**, select **GitHub Actions** as the
deployment source. The workflow provides Vite with the GitHub Pages base path,
while local development continues to use the domain root `/`.

## Third-party assets

Third-party assets remain subject to their respective licenses. They are not
relicensed by this repository or by the illutions Engine license.

### Argus Camera

This example uses the [Argus Camera](https://sketchfab.com/3d-models/argus-camera-f9112ea4c15043ebbb24fa121ffef920)
model published by Virtual Museums of Małopolska.

The model is available under the Creative Commons CC0 1.0 Universal license.

### Brown Photostudio 02

This example uses the Brown Photostudio 02 HDRI from Poly Haven.

- **Author:** Sergej Majboroda
- **License:** Creative Commons CC0 1.0 Universal
- **License URL:** https://creativecommons.org/publicdomain/zero/1.0/
- **Source:** https://polyhaven.com/a/brown_photostudio_02
- **Changes:** No changes made. The HDRI is used as the scene environment.

CC0 permits copying, modification, redistribution, and commercial use without
requiring attribution. The source is listed here for transparency and credit.

## Project structure

```text
src/       Application source code and Illutions configuration
public/    Models, environment maps, and layout assets
style/     Global application styles
license/   Illutions license data
```
