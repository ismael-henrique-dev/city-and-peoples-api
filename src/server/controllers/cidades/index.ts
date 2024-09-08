import * as create from "./Create"
import * as deleteById from "./DeleteById"
import * as getAll from "./GetAll"
import * as getById from "./GetById"
import * as updateById  from "./UpdateById"
// esse arquivo index tem como o ojetivo agrupar todas as controllers relacionadas as cidades
export const cidadesController = {
  ...create,
  ...getAll,
  ...getById,
  ...updateById,
  ...deleteById
}