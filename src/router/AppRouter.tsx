import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'react-native-paper';
import { CustomHeaderFuncion } from '../helpers/CustomHeaderFunction';
import MoreNewsPage from '../pages/MoreNewsPage';
import NoticiaCompleta from '../pages/NoticiaCompleta';
import { AppParamList } from '../types/interfaces/AppRouter';
import HomeRouter from './HomeRouter';

const { Navigator, Screen } = createNativeStackNavigator<AppParamList>();

const AppRouter = () => {
  const { colors } = useTheme();
  return (
    <Navigator initialRouteName="Inicio">
      <Screen name="Inicio" component={HomeRouter} options={{ headerShown: false }} />
      <Screen name="NoticiaCompleta" component={NoticiaCompleta} options={{ headerShown: false }} />
      <Screen
        name="ShowMore"
        component={MoreNewsPage}
        options={CustomHeaderFuncion({ title: 'Categorias', tintColor: colors.primary, colors })}
      />
    </Navigator>
  );
};

export default AppRouter;
