import {MD3LightTheme, MD3Theme, configureFonts} from 'react-native-paper';
import {PoppinsEnum} from '../types/enums/fonts/PoppinsEnum';

const LightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#FF3A44',
    secondary: '#0080FF',
    background: '#F5F5F5',
    tertiary: '#FFE600',
    secondaryContainer: '#C5C5C5',
  },
  fonts: configureFonts({
    config: {
      titleSmall: {
        fontFamily: PoppinsEnum.REGULAR,
        fontSize: 14,
        fontWeight: '500',
        letterSpacing: 0.1,
        lineHeight: 20,
      },

      titleMedium: {
        fontFamily: PoppinsEnum.REGULAR,
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0.15,
        lineHeight: 24,
      },

      titleLarge: {
        fontFamily: PoppinsEnum.REGULAR,
        fontSize: 22,
        fontWeight: '400',
        letterSpacing: 0,
        lineHeight: 28,
      },
      labelSmall: {
        fontFamily: PoppinsEnum.REGULAR,
        fontSize: 11,
        fontWeight: '500',
        letterSpacing: 0.5,
        lineHeight: 16,
      },
      labelMedium: {
        fontFamily: PoppinsEnum.REGULAR,
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: 0.5,
        lineHeight: 16,
      },
      labelLarge: {
        fontFamily: PoppinsEnum.REGULAR,
        fontSize: 14,
        fontWeight: '500',
        letterSpacing: 0.1,
        lineHeight: 20,
      },
      displaySmall: {
        fontFamily: PoppinsEnum.REGULAR,
        fontSize: 36,
        fontWeight: '400',
        letterSpacing: 0,
        lineHeight: 44,
      },
      displayMedium: {
        fontFamily: PoppinsEnum.REGULAR,
        fontSize: 45,
        fontWeight: '400',
        letterSpacing: 0,
        lineHeight: 52,
      },
      displayLarge: {
        fontFamily: PoppinsEnum.REGULAR,
        fontSize: 57,
        fontWeight: '400',
        letterSpacing: 0,
        lineHeight: 64,
      },
      headlineSmall: {
        fontFamily: PoppinsEnum.REGULAR,
        fontSize: 24,
        fontWeight: '400',
        letterSpacing: 0,
        lineHeight: 32,
      },
      headlineMedium: {
        fontFamily: PoppinsEnum.REGULAR,
        fontSize: 28,
        fontWeight: '400',
        letterSpacing: 0,
        lineHeight: 36,
      },
      headlineLarge: {
        fontFamily: PoppinsEnum.REGULAR,
        fontSize: 32,
        fontWeight: '400',
        letterSpacing: 0,
        lineHeight: 40,
      },
      bodySmall: {
        fontFamily: PoppinsEnum.REGULAR,
        fontSize: 12,
        fontWeight: '400',
        letterSpacing: 0.4,
        lineHeight: 16,
      },
      bodyMedium: {
        fontFamily: PoppinsEnum.REGULAR,
        fontSize: 14,
        fontWeight: '400',
        letterSpacing: 0.25,
        lineHeight: 20,
      },
      bodyLarge: {
        fontFamily: PoppinsEnum.REGULAR,
        fontSize: 16,
        fontWeight: '400',
        letterSpacing: 0.15,
        lineHeight: 24,
      },
    },
    isV3: true,
  }),
};

export {LightTheme};
