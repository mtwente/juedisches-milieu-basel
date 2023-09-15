FROM node:18.16.1-alpine as builder

WORKDIR /app

COPY . .

RUN npm run build

FROM bitnami/nginx:latest

COPY --from=builder /app/www /app
