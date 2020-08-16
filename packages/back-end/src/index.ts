import 'reflect-metadata'
import {authenticatorRoutes} from './apps/api/authenticate/routes'
import {cardRoutes} from './apps/api/card/routes'
import { ExpressListener } from './libs/server/listeners/express-listener'
import { HttpServer } from './libs/server/http-server'

const httpPort = process.env.HTTP_PORT ? parseInt(process.env.HTTP_PORT, 10) : 3000

const listener = new ExpressListener(httpPort)
    .addRoutes(cardRoutes)
    .addRoutes(authenticatorRoutes)

const server = HttpServer.create(listener)

server.start()
