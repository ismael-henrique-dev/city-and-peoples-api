import { Request, RequestHandler, Response } from "express"
import * as yup from "yup"
import { validation } from "../../shared/middlewares"

interface Icidade {
  nome: string
}

const bodyValidation: yup.ObjectSchema<Icidade> = yup.object().shape({
  nome: yup.string().required().min(3),
})

interface IFilter {
  filter?: string
}

const queryValidation: yup.ObjectSchema<IFilter> = yup.object().shape({
  filter: yup.string().required().min(3),
})

export const createValidation = validation((getSchema) => ({
  body: getSchema<Icidade>(
    yup.object().shape({
      nome: yup.string().required().min(3),
      estado: yup.string().required().min(3),
    })
  ),
  query: getSchema<IFilter>(
    yup.object().shape({
      filter: yup.string().required().min(3),
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
