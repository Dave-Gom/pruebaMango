import React, { useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import PrimaryBackground from '../components/PrimaryBackground';
import LatesNews from '../widgets/noticias/LatestNews';
import PorCategoria from '../widgets/noticias/PorCategoria';

const Home = () => {
  const { colors } = useTheme();
  const [refreshing, setRefreshing] = useState(false);

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
        <View style={{ paddingVertical: 20 }}>
          <LatesNews
            title="General"
            showMore={() => {}}
            setRefreshing={setRefreshing}
            refreshing={refreshing}
            showInfo={() => {}}
          />
        </View>
        <View>
          <PorCategoria />
        </View>
      </ScrollView>
    </PrimaryBackground>
  );
};

export default Home;
