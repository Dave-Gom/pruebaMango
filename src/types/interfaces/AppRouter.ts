import { CategoriesEnum } from '../enums/noticias/noticiasParams';
import { Article } from '../responses/newsResponse';

export type AppParamList = {
  Inicio: undefined;
  NoticiaCompleta: { articulo: Article };
  ShowMore: { category: CategoriesEnum };
};

export type HomeRouterList = {
  Home: undefined;
  Search: undefined;
};
