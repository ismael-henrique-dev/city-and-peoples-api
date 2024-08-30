import { Request, RequestHandler, Response } from "express"
import * as yup from "yup"

interface Icidade {
  nome: string
}

const bodyValidation: yup.ObjectSchema<Icidade> = yup.object().shape({
  nome: yup.string().required().min(3),
})

export const createBodyValidator: RequestHandler = async (req, res, next) => {
  try {
    await bodyValidation.validate(req.body, {
      abortEarly: false, // esse método serve para validar todos os campos
    })
    return next()
  } catch (err) {
    const yupError = err as yup.ValidationError
    const Erros: Record<string, string> = {}

    yupError.inner.forEach((error) => {
      if (!error.path) return

      Erros[error.path] = error.message
    })

    return res.status(400).json({
      Erros,
    })
  }
}

interface IFilter {
  filter?: string
}

const queryValidation: yup.ObjectSchema<IFilter> = yup.object().shape({
  filter: yup.string().required().min(3),
})

export const createQueryValidator: RequestHandler = async (req, res, next) => {
  try {
    await queryValidation.validate(req.query, {
      abortEarly: false, // esse método serve para validar todos os campos
    })
    return next()
  } catch (err) {
    const yupError = err as yup.ValidationError
    const Erros: Record<string, string> = {}

    yupError.inner.forEach((error) => {
      if (!error.path) return

      Erros[error.path] = error.message
    })

    return res.status(400).json({
      Erros,
    })
  }
}

//coloquei esses dois primeiros colchetes para eu conseguir acessar o terceiro parametro e passar a minha interface
export const create = async (req: Request<{}, {}, Icidade>, res: Response) => {
  let validateData: Icidade | undefined = undefined

  console.log(validateData)

  return res.send("Create")
}
