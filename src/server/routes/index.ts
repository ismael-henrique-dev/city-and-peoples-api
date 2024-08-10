import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
  return res.send("teste")
})

router.post("/teste", (req, res) => {

  console.log(req.body)
  return res.json(req.body)
})

export { router }
