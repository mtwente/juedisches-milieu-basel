# App zum jüdischen Basel

Das jüdische Basel 1850 bis 1914.

## Development

This app is developed with Stencil.

To start, clone this repo to a new directory:

```bash
npm install
```

and run:

```bash
npm start
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```bash
npm test
```

To run the unit tests and watch for file changes during development, run:

```bash
npm run test.watch
```

To deploy the app to GitHub Pages, run:

```bash
npm run deploy
```

## Docker

Create docker image

```bash
docker build -t juedisches-basel-app .
```

Start docker container

```bash
docker run -d -p 8080:8080 --name jb-app juedisches-basel-app
```

Stop and remove docker container

```bash
docker rm -f jb-app
```

remove the image

```bash
docker image rm juedisches-basel-app
```
