import React from 'react';
import {
  ColorValue,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {useTheme} from 'react-native-paper';

interface BackgroudPosProps {
  children: JSX.Element | JSX.Element[];
  headerContent?: JSX.Element | JSX.Element[];
  statusBarBgColor?: ColorValue;
  primaryColor?: ColorValue;
  radiusTop?: number;
}

const esIos = Platform.OS === 'ios';

const Wrapper = esIos ? View : SafeAreaView;

const PrimaryBackground = ({
  children,
  headerContent,
  statusBarBgColor,
  primaryColor,
  radiusTop = 0,
}: BackgroudPosProps) => {
  const {colors} = useTheme();

  return (
    <>
      {!esIos && (
        <StatusBar
          backgroundColor={
            statusBarBgColor ? statusBarBgColor : primaryColor ?? colors.primary
          }
          barStyle="default"
        />
      )}
      <Wrapper style={{flex: 1, backgroundColor: colors.primary}}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: primaryColor ?? colors.primary,
            },
          ]}>
          <>{headerContent}</>
          <View
            style={[
              styles.content,
              {
                borderTopLeftRadius: radiusTop,
                borderTopEndRadius: radiusTop,
                backgroundColor: colors.background,
              },
            ]}>
            {children}
          </View>
        </View>
      </Wrapper>
    </>
  );
};

export default PrimaryBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: esIos ? 50 : 0,
  },
  content: {
    flex: 1,
    overflow: 'hidden',
  },
});
