import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import PrimaryBackground from '../components/PrimaryBackground';
import { CategoriesEnum } from '../types/enums/noticias/noticiasParams';
import { AppParamList, HomeRouterList } from '../types/interfaces/AppRouter';
import { Article } from '../types/responses/newsResponse';
import LatesNews from '../widgets/noticias/LatestNews';
import PorCategoria from '../widgets/noticias/PorCategoria';
const Home = ({}: NativeStackScreenProps<HomeRouterList, 'Home'>) => {
  const { navigate } = useNavigation<NativeStackNavigationProp<AppParamList>>();
  const { colors } = useTheme();
  const [refreshing, setRefreshing] = useState(false);

  const showNoticia = (articulo: Article) => navigate('NoticiaCompleta', { articulo });

  const showMore = (category: CategoriesEnum) => navigate('ShowMore', { category });

  return (
    <PrimaryBackground primaryColor={colors.background}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            title="Actualizar"
            refreshing={refreshing}
            tintColor={'white'}
            titleColor={'white'}
            style={{ zIndex: 90, elevation: 90 }}
            onRefresh={() => setRefreshing(true)}
          />
        }
      >
        <View style={{ paddingVertical: 23 }}>
          <LatesNews
            title="General"
            showMore={() => {
              showMore(CategoriesEnum.GENERAL);
            }}
            setRefreshing={setRefreshing}
            refreshing={refreshing}
            showInfo={showNoticia}
          />
        </View>
        <PorCategoria
          refreshing={refreshing}
          setRefreshing={setRefreshing}
          showInfo={showNoticia}
          limit={6}
          showMore={showMore}
        />
      </ScrollView>
    </PrimaryBackground>
  );
};

export default Home;
