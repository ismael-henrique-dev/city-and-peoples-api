import { Request, Response } from "express"
import * as yup from "yup"
import { validation } from "../../shared/middlewares"

interface Icidade {
  nome: string
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<Icidade>(
    yup.object().shape({
      nome: yup.string().required().min(3),
    })
  ),
}))

// export const createBodyValidator = validation("body", bodyValidation)

//coloquei esses dois primeiros colchetes para eu conseguir acessar o terceiro parametro e passar a minha interface
export const create = async (req: Request<{}, {}, Icidade>, res: Response) => {
  let validateData: Icidade | undefined = undefined

  console.log(validateData)

  return res.send("Create")
}
