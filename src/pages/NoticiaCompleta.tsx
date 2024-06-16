import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ImageBackground, Linking, ScrollView, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { FeatherIcon } from '../components/icons/Icons';
import { PoppinsEnum } from '../types/enums/fonts/PoppinsEnum';
import { AppParamList } from '../types/interfaces/AppRouter';

const NoticiaCompleta = ({
  route: {
    params: { articulo },
  },
  navigation,
}: NativeStackScreenProps<AppParamList, 'NoticiaCompleta'>) => {
  const { colors } = useTheme();
  const { height } = useWindowDimensions();

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          top: 70,
          zIndex: 10,
          left: 10,
          backgroundColor: 'rgba(220, 220, 220, 0.7)',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          width: 38,
          height: 38,
        }}
      >
        <FeatherIcon name="chevron-left" size={30} color={colors.primary} />
      </TouchableOpacity>
      <View style={{ height: '100%', flex: 1 }}>
        <ImageBackground
          source={{ uri: articulo.urlToImage! }}
          resizeMode={'cover'}
          style={{ flex: 1, overflow: 'hidden', height: height / 2 }}
        >
          <ScrollView
            style={{ backgroundColor: 'transparent' }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                flex: 1,
                marginTop: articulo.urlToImage ? height / 2 - 30 : undefined,
                borderTopLeftRadius: 30,
                borderTopEndRadius: 30,
                backgroundColor: colors.background,
                minHeight: height / 2,
                paddingHorizontal: 30,
                marginBottom: -30,
                paddingBottom: 100,
              }}
            >
              <View
                style={{
                  marginHorizontal: 10,
                  backgroundColor: 'rgba(220, 220, 220, 0.81)',
                  padding: 15,
                  borderRadius: 20,
                  marginTop: articulo.urlToImage ? -70 : 120,
                }}
              >
                <Text
                  style={{
                    marginBottom: 10,
                    fontFamily: PoppinsEnum.BOLD,
                    fontWeight: '600',
                    textShadowColor: 'rgba(0,0,0,0.4)',
                    textShadowOffset: { height: 0.6, width: 0.5 },
                    textShadowRadius: 1,
                  }}
                >
                  {new Date(articulo.publishedAt).toDateString()}
                </Text>
                <Text style={{ fontFamily: PoppinsEnum.BOLD, fontWeight: '600', fontSize: 18 }}>{articulo.title}</Text>
                <Text
                  style={{
                    marginTop: 10,
                    fontFamily: PoppinsEnum.BOLD,
                    fontWeight: '600',
                    textShadowColor: 'rgba(0,0,0,0.4)',
                    textShadowOffset: { height: 0.6, width: 0.5 },
                    textShadowRadius: 1,
                  }}
                >
                  Published by {articulo.author}
                </Text>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontFamily: PoppinsEnum.REGULAR, fontSize: 16 }}>{articulo.content}</Text>
                <Text style={{ fontFamily: PoppinsEnum.REGULAR, fontSize: 16 }}>{articulo.content}</Text>
                <Text style={{ fontFamily: PoppinsEnum.REGULAR, fontSize: 16 }}>{articulo.content}</Text>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text
                  style={{
                    color: colors.primary,
                    textDecorationLine: 'underline',
                    fontFamily: PoppinsEnum.REGULAR,
                    fontSize: 16,
                  }}
                  onPress={() => {
                    Linking.openURL(articulo.url);
                  }}
                >
                  Ver noticia completa
                </Text>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontFamily: PoppinsEnum.REGULAR, fontSize: 16 }}>Sources: {articulo.source.name}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </>
  );
};

export default NoticiaCompleta;
