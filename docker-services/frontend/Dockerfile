FROM node:22.16.0-alpine
WORKDIR /www

COPY ./frontend/package.json ./package.json
COPY ./frontend/package-lock.json ./package-lock.json

RUN npm install

CMD npm i && npm run build