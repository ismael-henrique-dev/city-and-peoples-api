import { Request, Response } from "express"

interface Icidade {
  nome: string
}

//coloquei esses dois primeiros colchetes para eu conseguir acessar o terceiro parametro e passar a minha interface
export const create = (req: Request<{}, {}, Icidade>, res: Response) => {

  const data = req.body

  console.log(data)

  return res.send("Create")
}