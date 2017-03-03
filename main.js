import Exponent from 'exponent';
import { StackNavigator } from 'react-navigation';
import Home from './src/components/Home';
import NanologShow from './src/components/NanologShow';
import {
  StatusBar,
} from 'react-native';

StatusBar.setBarStyle('light-content');

const App = StackNavigator({
  Home: { screen: Home },
  NanologShow: { screen: NanologShow },
});

Exponent.registerRootComponent(App);
