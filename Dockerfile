FROM node:18.16.1-alpine as builder

ENV PUPPETEER_SKIP_DOWNLOAD=true

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

FROM bitnami/nginx:latest

COPY --from=builder /app/www /app
