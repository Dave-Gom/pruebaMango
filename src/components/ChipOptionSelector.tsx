import React, { useEffect, useMemo } from 'react';
import { ScrollView } from 'react-native';
import { Chip, useTheme } from 'react-native-paper';

export interface ChipOptionSelectorProps<T extends Object, K extends keyof T> {
  data: Array<T>;
  keyExtractor: K;
  selectedValue: T;
  setSelectedValue: (value: T) => void;
  keyTitle: K;
  showSelectedCheck?: boolean;
}

const ChipOptionSelector = <T extends Object, K extends keyof T>({
  data,
  keyExtractor,
  selectedValue,
  setSelectedValue,
  keyTitle,
  showSelectedCheck = false,
}: ChipOptionSelectorProps<T, K>) => {
  const { colors } = useTheme();

  useEffect(() => {
    return () => {
      setSelectedValue(data[0]);
    };
  }, []);

  let optiones = useMemo(() => {
    let nuevoContenedor = [...data];
    nuevoContenedor.sort((a: T, b: T) => {
      if (a[keyTitle] > b[keyTitle]) {
        return 1;
      } else if (a[keyTitle] < b[keyTitle]) {
        return -1;
      }

      return 0;
    });

    return nuevoContenedor;
  }, [data]);

  const handlePressItem = (item: T) => {
    setSelectedValue(item);
  };
  return (
    <ScrollView
      style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 10, flexWrap: 'wrap' }}
      horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {optiones.map(item => {
        let isSelected = selectedValue[keyExtractor] === item[keyExtractor];

        return (
          <Chip
            key={`${item[keyExtractor]}`}
            mode="outlined"
            onPress={() => handlePressItem(item)}
            style={{ borderRadius: 20, margin: 3, backgroundColor: isSelected ? colors.primary : colors.background }}
            selected={isSelected}
            selectedColor={isSelected ? colors.background : colors.primary}
            showSelectedCheck={showSelectedCheck}
          >{`${item[keyTitle]}`}</Chip>
        );
      })}
    </ScrollView>
  );
};

export default ChipOptionSelector;
