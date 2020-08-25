FROM node:12-alpine

RUN apk update \
    && apk add \
    sudo \
    yarn && export PATH="$PATH:`yarn global bin`" \
    && yarn add global typescript

EXPOSE 3000

RUN mkdir -p /www/data

WORKDIR /www/data