import { server } from "./server/Server"


console.log(process.env.PORT)
server.listen(process.env.PORT || 5050, () => {
  console.log(`Port: ${process.env.PORT || 5050}`)
})
