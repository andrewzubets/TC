FROM node:22.16.0-alpine
ARG APP_ENV=production

WORKDIR /www

COPY ./app/package.json ./package.json
COPY ./app/package-lock.json ./package-lock.json

RUN npm install

RUN if [ "$APP_ENV" = "development" ]; then \
    echo "Setting up express development server"; \
    npm install -g nodemon; \
  fi

EXPOSE 80

CMD npm i && node server.mjs