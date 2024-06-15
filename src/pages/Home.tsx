import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native-paper';
import {PoppinsEnum} from '../types/enums/fonts/PoppinsEnum';

const Home = () => {
  return (
    <SafeAreaView>
      <Text style={{fontFamily: PoppinsEnum.REGULAR}}>Hola</Text>
    </SafeAreaView>
  );
};

export default Home;
