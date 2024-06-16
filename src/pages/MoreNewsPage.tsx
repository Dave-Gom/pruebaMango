import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView } from 'react-native';
import { AppParamList } from '../types/interfaces/AppRouter';
import { Article } from '../types/responses/newsResponse';
import PorCategoria from '../widgets/noticias/PorCategoria';

const MoreNewsPage = ({
  navigation,
  route: {
    params: { category },
  },
}: NativeStackScreenProps<AppParamList, 'ShowMore'>) => {
  const [refreshing, setRefreshing] = useState(false);

  const showNoticia = (articulo: Article) => navigation.navigate('NoticiaCompleta', { articulo });

  return (
    <SafeAreaView>
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
        <PorCategoria
          refreshing={refreshing}
          setRefreshing={setRefreshing}
          showInfo={showNoticia}
          categoriaInicial={category}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoreNewsPage;
