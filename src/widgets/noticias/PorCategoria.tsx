import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
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
  limit?: number;
  showMore?: (cat: CategoriesEnum) => void;
  refreshing: boolean;
  setRefreshing: (value: boolean) => void;
  showInfo: (articulo: Article) => void;
  categoriaInicial?: CategoriesEnum;
}

const PorCategoria = ({
  refreshing,
  setRefreshing,
  showInfo,
  limit,
  showMore,
  categoriaInicial = CategoriesEnum.BUSINESS,
}: PorCategoriaProps) => {
  const [selectedCategorie, setSelectedCategorie] = useState<CategoriesEnum>(categoriaInicial);
  const { loadData, loading, articles } = useNewsApi(() => setRefreshing(false));
  const { colors } = useTheme();

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
        data={limit ? articles.slice(0, limit) : articles}
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
            message="No se ha podido realizar la carga"
            lottieSource={require('../../../assets/lotties/noData.json')}
            cardStyle={{ borderRadius: 20 }}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      {limit && showMore && articles.length > limit && (
        <View style={styles.verMas}>
          <View>
            <Text
              style={[styles.textButtonStyles, { backgroundColor: colors.primary, color: colors.background }]}
              onPress={() => showMore(selectedCategorie)}
            >
              Ver más
            </Text>
          </View>
        </View>
      )}
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
  verMas: { flexDirection: 'row-reverse', marginTop: 4, justifyContent: 'space-between', marginBottom: 10 },
});
