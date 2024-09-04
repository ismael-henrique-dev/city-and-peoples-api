import { server } from "./server/Server"
import "dotenv/config"
console.log(process.env.PORT)
console.log(process.env.PORT)
server.listen(process.env.PORT || 3333, () => {
  console.log(`Port: $ || 3333}`)
})
