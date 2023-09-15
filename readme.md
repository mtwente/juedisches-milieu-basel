# App zum jüdischen Milieu Basels

Das jüdische Milieus Basels vom 19. Jahrhundert bis heute. Ein Spiel mit Data Stories.

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


## Docker

Create docker image

```bash
docker build -t juedisches-milieu-app .
```

Start docker container

```bash
docker run -d -p 8080:8080 --name jm-app juedisches-milieu-app 
```

Stop and remove docker container

```bash
docker rm -f jm-app
```

remove the image

```bash
docker image rm juedisches-milieu-app
```