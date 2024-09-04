import { Router } from "express"
import { cidadesController } from "../controllers"
import {  } from "../controllers/cidades/Create"

const router = Router()

router.get("/", (req, res) => {
  return res.send("rodando")
})

// essa arrow function indica que é um controller caso ela devolver uma resp para o usuário, ou
// caso ela esteja manipulando os dados para inserir algo no database

router.post(
  "/cidades",
  cidadesController.createValidation,
  cidadesController.create
)

router.get(
  "/cidades",
  cidadesController.geatAllValidation,
  cidadesController.getAll
)

export { router }
