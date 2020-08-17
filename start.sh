#!/bin/sh

yarn install

sudo /bin/sh ./scripts/add-host.sh "untitled.local"
sudo /bin/sh ./scripts/add-host.sh "api.untitled.local"

yarn workspace front-end run build

docker-compose up -d --build