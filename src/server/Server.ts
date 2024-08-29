import "dotenv/config"
import express from "express"

import "./shared/services/TraducoesYup"
import { router } from "./routes"

export const server = express()

server.use(express.json())
server.use(router)
