import React from 'react';
import {Text, useTheme} from 'react-native-paper';
import PrimaryBackground from '../components/PrimaryBackground';
import {PoppinsEnum} from '../types/enums/fonts/PoppinsEnum';

const Home = () => {
  const {colors} = useTheme();
  return (
    <PrimaryBackground primaryColor={colors.background}>
      <Text style={{fontFamily: PoppinsEnum.REGULAR}}>Hola</Text>
    </PrimaryBackground>
  );
};

export default Home;
