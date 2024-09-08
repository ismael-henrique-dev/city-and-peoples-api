import { Request, Response } from "express"
import * as yup from "yup"
import { validation } from "../../shared/middlewares"

interface IparamProps {
  id?: number
}

interface IBodyProps {
  nome: string
}

export const updateByIdValidation = validation((getSchema) => ({
  params: getSchema<IparamProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
  body: getSchema<IBodyProps>(
    yup.object().shape({
      nome: yup.string().required().min(3),
    })
  ),
}))

export const updateById = async (req: Request<IparamProps, {}, IBodyProps>, res: Response) => {
  let validateData: IparamProps | undefined = undefined
  console.log(req.params)
   console.log(req.body)

  console.log(validateData)

  return res.status(501).send("Não implementado")
}
