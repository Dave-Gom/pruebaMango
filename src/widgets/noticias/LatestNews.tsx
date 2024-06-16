import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View, useWindowDimensions } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
// import ErrorCard from '../../components/ErrorCard';
// import LottieViewer from '../../components/LottieViewer';
import LottieViewer from '../../components/LottieViewer';
import ErrorCard from '../../components/cards/ErrorCard';
import NewsCard from '../../components/cards/NewsCard';
import useNewsApi from '../../hooks/useNewsApi';
import { PoppinsEnum } from '../../types/enums/fonts/PoppinsEnum';
import { Article } from '../../types/responses/newsResponse';

export interface LatestProps {
  title: string;
  showMore: () => void;
  refreshing: boolean;
  setRefreshing: (value: boolean) => void;
  showInfo: (articulo: Article) => void;
}

const LatesNews = ({ title, showMore, refreshing, setRefreshing, showInfo }: LatestProps) => {
  const { colors } = useTheme();
  const { loadData, error, loading, articles } = useNewsApi(() => setRefreshing(false));
  const { width } = useWindowDimensions();

  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  useEffect(() => {
    if (refreshing) {
      loadData();
    }
  }, [refreshing]);

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
    <View style={styles.containerStyle}>
      <View style={styles.verMas}>
        <Text style={styles.titleStyles}>{title}</Text>
        {articles.length > 2 && (
          <View>
            <Text
              style={[styles.textButtonStyles, { backgroundColor: colors.primary, color: colors.background }]}
              onPress={showMore}
            >
              Ver más
            </Text>
          </View>
        )}
      </View>

      {error ? (
        <ErrorCard
          message="Ups! Algo salió mal, por favor intentá de nuevo."
          lottieSource={require('../../../assets/lotties/error.json')}
          cardStyle={{ borderRadius: 20, marginHorizontal: 24 }}
        />
      ) : (
        <>
          <FlatList
            horizontal
            data={articles.slice(0, 10)}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <NewsCard
                titulo={item.title}
                banner={item.urlToImage}
                onPress={() => showInfo(item)}
                description={item.description}
                cardStyle={{
                  width: 350,
                  marginLeft: index === 0 ? 24 : 0,
                  height: 340,
                }}
              />
            )}
            ListEmptyComponent={() => (
              <ErrorCard
                message="No se ha podido realizar la carga"
                lottieSource={require('../../../assets/lotties/noData.json')}
                cardStyle={{
                  width: width - 48,
                  borderRadius: 20,
                  marginLeft: 24,
                }}
              />
            )}
            ItemSeparatorComponent={(_, index) => <View key={'separator' + index} style={styles.separator} />}
            keyExtractor={({ title, publishedAt }) => `EnCurso${publishedAt}${title}`}
          />
        </>
      )}
    </View>
  );
};

export default LatesNews;

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
  separator: { height: '100%', width: 10 },
  verMas: { flexDirection: 'row', marginTop: 4, justifyContent: 'space-between' },
});
