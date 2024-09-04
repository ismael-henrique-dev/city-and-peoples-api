import * as create from "./Create"
import * as getAll from "./GetAll"
// esse arquivo index tem como o ojetivo agrupar todas as controllers relacionadas as cidades
export const cidadesController = {
  ...create,
  ...getAll
}