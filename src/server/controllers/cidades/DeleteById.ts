import { Request, Response } from "express"
import * as yup from "yup"
import { validation } from "../../shared/middlewares"

interface IparamProps {
  id?: number
}

export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema<IparamProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}))

export const deleteById = async (req: Request<IparamProps>, res: Response) => {
  let validateData: IparamProps | undefined = undefined
  console.log(req.params)

  console.log(validateData)

  return res.status(501).send("Não implementado")
}
