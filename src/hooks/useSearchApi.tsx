import { useState } from 'react';
import { ApiAuth } from '../helpers/API';
import { CategoriesEnum } from '../types/enums/noticias/noticiasParams';
import { Article, TopHeadlinesResponse } from '../types/responses/newsResponse';

const useSearchApi = (refreshing = () => {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);

  const loadData = async (query: string, category: CategoriesEnum = CategoriesEnum.GENERAL) => {
    try {
      setLoading(true);
      const url = `/everything?q=${query}`;
      const response = await ApiAuth.get<TopHeadlinesResponse>(url);

      if (response) {
        if (response && response.status === 200) {
          setArticles(response.data.articles);
        } else {
          setError(true);
        }
      } else {
      }

      setLoading(false);
      refreshing();
    } catch (error) {
      setError(true);
      refreshing();
    }
  };

  return { error, loading, loadData, articles, setArticles };
};

export default useSearchApi;
