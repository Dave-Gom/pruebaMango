import 'moment/locale/es';
import React from 'react';
import { ImageBackground, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { PoppinsEnum } from '../../types/enums/fonts/PoppinsEnum';

export interface NewsCardProps {
  titulo: string;
  banner: string | null;
  onPress: () => void;
  cardStyle?: StyleProp<ViewStyle>;
  description: string | null;
}

const NewsCard = ({ onPress, titulo, banner, cardStyle, description }: NewsCardProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: 120,
          width: '100%',
        },
        cardStyle,
      ]}
    >
      <ImageBackground
        source={banner && banner.length > 0 ? { uri: banner } : require('../../../assets/images/noBanner1.webp')}
        resizeMode={'cover'}
        style={{ flex: 1, borderRadius: 10, overflow: 'hidden' }}
      >
        <View style={{ flex: 1, backgroundColor: '#000000ab', padding: 20, justifyContent: 'space-around' }}>
          <Text style={{ fontFamily: PoppinsEnum.BOLD, fontSize: 18, fontWeight: '600', color: colors.background }}>
            {titulo && titulo.length > 50 ? titulo.substring(0, 80).trim() + '...' : titulo}
          </Text>
          <Text style={{ fontFamily: PoppinsEnum.REGULAR, fontSize: 14, fontWeight: '400', color: colors.background }}>
            {description && description.length > 130 ? description.substring(0, 80).trim() + '...' : description}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 4,
    marginRight: 25,
    marginLeft: 0,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
