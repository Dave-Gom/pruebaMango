import { Article } from '../responses/newsResponse';

export type AppParamList = {
  Inicio: undefined;
  NoticiaCompleta: { articulo: Article };
};

export type HomeRouterList = {
  Home: undefined;
};
