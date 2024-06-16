import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { PoppinsEnum } from '../../types/enums/fonts/PoppinsEnum';
import LottieViewer from '../LottieViewer';

export interface ErrorCardProps {
  message: string;
  cardStyle?: StyleProp<ViewStyle>;
  lottieSource: string;
}

const ErrorCard = ({ message, cardStyle, lottieSource }: ErrorCardProps) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        {
          height: 140,
          padding: 20,
          backgroundColor: colors.primary,
        },
        cardStyle,
      ]}
    >
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ flex: 3.5, color: colors.background, fontFamily: PoppinsEnum.REGULAR, fontSize: 16 }}>
          {message}
        </Text>
        <LottieViewer
          source={lottieSource}
          imgWidth={150}
          imgHeight={150}
          allowLoop={false}
          keepLastFrame={true}
          styles={{ flex: 2.5 }}
        />
      </View>
    </View>
  );
};

export default ErrorCard;

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
