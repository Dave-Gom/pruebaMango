import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ChipOptionSelector from '../../components/ChipOptionSelector';
import LottieViewer from '../../components/LottieViewer';
import ErrorCard from '../../components/cards/ErrorCard';
import NewsCard from '../../components/cards/NewsCard';
import useNewsApi from '../../hooks/useNewsApi';
import { PoppinsEnum } from '../../types/enums/fonts/PoppinsEnum';
import { CategoriesEnum } from '../../types/enums/noticias/noticiasParams';
import { CatetoriaOption } from '../../types/interfaces/News';
import { Article } from '../../types/responses/newsResponse';

const Categorias: CatetoriaOption[] = [
  { Content: CategoriesEnum.BUSINESS, Title: 'Business' },
  { Content: CategoriesEnum.ENTERTAINMENT, Title: 'Entertainment' },
  { Content: CategoriesEnum.GENERAL, Title: 'General' },
  { Content: CategoriesEnum.HEALTH, Title: 'Health' },
  { Content: CategoriesEnum.SCIENCE, Title: 'Science' },
  { Content: CategoriesEnum.SPORTS, Title: 'Sports' },
  { Content: CategoriesEnum.TECHNOLOGY, Title: 'Technology' },
];

export interface PorCategoriaProps {
  showMore: () => void;
  refreshing: boolean;
  setRefreshing: (value: boolean) => void;
  showInfo: (articulo: Article) => void;
}

const PorCategoria = ({ refreshing, setRefreshing, showInfo }: PorCategoriaProps) => {
  const [selectedCategorie, setSelectedCategorie] = useState<CategoriesEnum>(CategoriesEnum.BUSINESS);
  const { loadData, error, loading, articles } = useNewsApi(() => setRefreshing(false));

  useEffect(() => {
    loadData(selectedCategorie);
  }, []);

  useEffect(() => {
    loadData(selectedCategorie);
  }, [refreshing]);

  useEffect(() => {
    loadData(selectedCategorie);
  }, [selectedCategorie]);

  if (loading) {
    return (
      <LottieViewer
        source={require('../../../assets/lotties/loaderGenerico.json')}
        imgWidth={'100%'}
        imgHeight={60}
        allowLoop={true}
        keepLastFrame={true}
      />
    );
  }

  return (
    <View>
      <ChipOptionSelector
        data={Categorias}
        keyExtractor="Content"
        selectedValue={selectedCategorie!}
        //@ts-ignore
        setSelectedValue={setSelectedCategorie}
        keyTitle={'Title'}
      />
      <FlatList
        scrollEnabled={false}
        data={articles}
        style={{ paddingHorizontal: 24, paddingVertical: 10 }}
        renderItem={({ item, index }) => (
          <NewsCard
            titulo={item.title}
            banner={item.urlToImage}
            onPress={() => {
              showInfo(item);
            }}
            description={item.description}
            cardStyle={{ height: 200 }}
          />
        )}
        ListEmptyComponent={() => (
          <ErrorCard
            message="No hay torneos cercanos disponibles"
            lottieSource={require('../../../assets/lotties/noData.json')}
            cardStyle={{ borderRadius: 20 }}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default PorCategoria;

const styles = StyleSheet.create({
  containerStyle: { marginVertical: 5 },
  textButtonStyles: {
    fontFamily: PoppinsEnum.LIGH,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    overflow: 'hidden',
    fontSize: 12,
    marginHorizontal: 24,
  },
  titleStyles: {
    fontFamily: PoppinsEnum.BOLD,
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 10,
    marginHorizontal: 24,
  },
  separator: { width: '100%', height: 10 },
  verMas: { flexDirection: 'row', marginTop: 4, justifyContent: 'space-between' },
});
