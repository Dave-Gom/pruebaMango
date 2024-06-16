import React, { useState } from 'react';
import { View } from 'react-native';
import ChipOptionSelector from '../../components/ChipOptionSelector';
import { CategoriesEnum } from '../../types/enums/noticias/noticiasParams';
import { CatetoriaOption } from '../../types/interfaces/News';

const Categorias: CatetoriaOption[] = [
  { Content: CategoriesEnum.BUSINESS, Title: 'Business' },
  { Content: CategoriesEnum.ENTERTAINMENT, Title: 'Entertainment' },
  { Content: CategoriesEnum.GENERAL, Title: 'General' },
  { Content: CategoriesEnum.HEALTH, Title: 'Health' },
  { Content: CategoriesEnum.SCIENCE, Title: 'Science' },
  { Content: CategoriesEnum.SPORTS, Title: 'Sports' },
  { Content: CategoriesEnum.TECHNOLOGY, Title: 'Technology' },
];

const PorCategoria = () => {
  const [selectedCategorie, setSelectedCategorie] = useState<CatetoriaOption>(Categorias[0]);

  return (
    <View>
      <ChipOptionSelector
        data={Categorias}
        keyExtractor="Content"
        selectedValue={selectedCategorie}
        setSelectedValue={setSelectedCategorie}
        keyTitle={'Title'}
      />
    </View>
  );
};

export default PorCategoria;
