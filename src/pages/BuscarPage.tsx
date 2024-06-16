import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { Text, TextInput, useTheme } from 'react-native-paper';
import LottieViewer from '../components/LottieViewer';
import NewsCard from '../components/cards/NewsCard';
import useSearchApi from '../hooks/useSearchApi';
import { PoppinsEnum } from '../types/enums/fonts/PoppinsEnum';
import { AppParamList, HomeRouterList } from '../types/interfaces/AppRouter';

const BuscarPage = ({}: NativeStackScreenProps<HomeRouterList, 'Search'>) => {
  const { navigate } = useNavigation<NativeStackNavigationProp<AppParamList>>();
  const { colors } = useTheme();
  const [query, setQuery] = useState('');
  const { articles, loadData, loading, setArticles } = useSearchApi();

  useEffect(() => {
    if (query.length > 2) {
      loadData(query);
    } else if (query.length === 0) {
      setArticles([]);
    }
  }, [query]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <TextInput
          value={query}
          onChangeText={text => setQuery(text)}
          mode="outlined"
          placeholder="Search"
          right={
            query.length > 0 ? (
              <TextInput.Icon icon="close" color={colors.primary} onPress={() => setQuery('')} />
            ) : (
              <TextInput.Icon icon="magnify" color={colors.primary} />
            )
          }
          contentStyle={{ justifyContent: 'center' }}
          outlineStyle={{ borderRadius: 30, borderWidth: 1 }}
          outlineColor={colors.backdrop}
          activeOutlineColor={colors.primary}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            paddingTop: 10,
          }}
        >
          {loading ? (
            <LottieViewer
              source={require('../../assets/lotties/loaderGenerico.json')}
              imgWidth={'100%'}
              imgHeight={60}
              allowLoop={true}
              keepLastFrame={true}
            />
          ) : (
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              scrollEnabled
              data={articles}
              style={{ paddingVertical: 10 }}
              renderItem={({ item, index }) => (
                <NewsCard
                  titulo={item.title}
                  banner={item.urlToImage}
                  onPress={() => {
                    navigate('NoticiaCompleta', { articulo: item });
                  }}
                  description={item.description}
                  cardStyle={{ height: 200 }}
                />
              )}
              ListEmptyComponent={() => (
                <View style={[styles.container, { alignItems: 'center' }]}>
                  <Text
                    style={{
                      justifyContent: 'center',
                      fontFamily: PoppinsEnum.REGULAR,
                      fontSize: 16,
                    }}
                  >
                    Buscar noticias
                  </Text>
                </View>
              )}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BuscarPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  separator: { width: '100%', height: 10 },
});
