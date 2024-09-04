import { Request, Response } from "express"
import * as yup from "yup"
import { validation } from "../../shared/middlewares"

interface IQueryProps {
  page?: number
  limit?: number
  filter?: string
}

export const geatAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    yup.object().shape({
      page: yup.number().optional().moreThan(0),
      limit: yup.number().optional().moreThan(0),
      filter: yup.string().optional(),
    })
  ),
}))

// export const createBodyValidator = validation("body", bodyValidation)

//coloquei esses dois primeiros colchetes para eu conseguir acessar o terceiro parametro e passar a minha interface
export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response
) => {
  let validateData: IQueryProps | undefined = undefined
  console.log(req.query)

  console.log(validateData)

  return res.status(501).send("Não implementado")
}
