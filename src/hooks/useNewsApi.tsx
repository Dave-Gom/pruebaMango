import { useEffect, useState } from 'react';
import { ApiAuth } from '../helpers/API';
import { CategoriesEnum } from '../types/enums/noticias/noticiasParams';
import { Article, TopHeadlinesResponse } from '../types/responses/newsResponse';

const useNewsApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    loadData();

    return () => {};
  }, []);

  const loadData = async (category: CategoriesEnum = CategoriesEnum.GENERAL) => {
    try {
      setLoading(true);
      const url = `/top-headlines?country=us`;
      const response = await ApiAuth.get<TopHeadlinesResponse>(url, {
        params: {
          category,
        },
      });

      if (response) {
        if (response && response.status === 200) {
          setArticles(response.data.articles);
        } else {
          setError(true);
        }
      } else {
      }

      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  return { error, loading, loadData, articles };
};

export default useNewsApi;
