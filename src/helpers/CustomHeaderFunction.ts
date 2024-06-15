import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {StyleProp, TextStyle} from 'react-native';
import {MD3Colors} from 'react-native-paper/lib/typescript/types';
import {PoppinsEnum} from '../types/enums/fonts/PoppinsEnum';

interface headerProps {
  title?: string;
  //   titleColor?: string;
  headerColor?: string;
  tintColor?: string;
  alloBack?: boolean;
  headerTitleStyles?: StyleProp<
    Pick<TextStyle, 'fontFamily' | 'fontSize' | 'fontWeight'> & {
      color?: string | undefined;
    }
  >;
  colors: MD3Colors;
}

export const CustomHeaderFuncion = ({
  title = '',
  headerColor,
  tintColor,
  alloBack = true,
  headerTitleStyles,
  colors,
}: headerProps) => {
  const headerOptions: NativeStackNavigationOptions = {
    title: title,
    headerStyle: {
      backgroundColor: headerColor ? headerColor : colors.background,
    },
    headerBackTitleVisible: false,
    headerTintColor: tintColor,
    headerTitleStyle: [
      headerTitleStyles,
      {
        fontFamily: PoppinsEnum.BOLD,
      },
    ],
    headerShadowVisible: false,
    headerBackButtonMenuEnabled: alloBack,
  };
  return headerOptions;
};
