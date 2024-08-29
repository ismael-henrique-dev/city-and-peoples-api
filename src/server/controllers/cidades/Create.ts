import { Request, Response } from "express"
import * as yup from "yup"

interface Icidade {
  nome: string
}

const bodyValidation: yup.ObjectSchema<Icidade> = yup.object().shape({
  nome: yup.string().required().min(3),
})

//coloquei esses dois primeiros colchetes para eu conseguir acessar o terceiro parametro e passar a minha interface
export const create = async (req: Request<{}, {}, Icidade>, res: Response) => {
  let validateData: Icidade | undefined = undefined

  try {
    validateData = await bodyValidation.validate(req.body, {
      abortEarly: false, // esse método serve para validar todos os campos
    })
  } catch (err) {
    const yupError = err as yup.ValidationError
    const Erros: Record<string, string> = {}

    yupError.inner.forEach((error) => {
      if (!error.path) return

      Erros[error.path] = error.message
    })

    return res.status(400).json({
      Erros
    })
  }

  console.log(validateData)

  return res.send("Create")
}
