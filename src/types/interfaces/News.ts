import { CategoriesEnum } from '../enums/noticias/noticiasParams';

export interface NewsListData {
  title: string;
  portada: string;
  description: string;
}

export interface CatetoriaOption {
  Title: string;
  Content: CategoriesEnum;
}
