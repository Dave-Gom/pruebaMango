import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>hola</Text>
      <Text style={{fontFamily: 'Poppins-Regular'}}>hola</Text>
      <Icon name="font" size={30} color="#900" />
    </View>
  );
};

export default App;
