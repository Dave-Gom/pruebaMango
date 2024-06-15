import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'react-native-paper';
import {AppParamList} from '../types/interfaces/AppRouter';
import HomeRouter from './HomeRouter';

const {Navigator, Screen} = createNativeStackNavigator<AppParamList>();

const AppRouter = () => {
  const {colors} = useTheme();
  return (
    <Navigator initialRouteName="Inicio">
      <Screen
        name="Inicio"
        component={HomeRouter}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};

export default AppRouter;
