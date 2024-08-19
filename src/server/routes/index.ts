import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
  return res.send("teste")
})

// essa arrow function indica que é um controller caso ela devolver uma resp para o usuário, ou 
// caso ela esteja manipulando os dados para inserir algo no database

router.post("/teste", (req, res) => {

  console.log(req.body)
  return res.json(req.body)
})

export { router }
