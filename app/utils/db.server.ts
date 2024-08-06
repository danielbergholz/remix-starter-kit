import { PrismaClient } from "@prisma/client"
import { singleton } from "./singleton.server"

const db = singleton("db", () => new PrismaClient())
db.$connect()

export { db }
