import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import Home from "./components/home/Home";

const HomeNavigator = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    }
});

const AppNavigator = createStackNavigator({
  HomeFlow: {
    screen: HomeNavigator,
    navigationOptions: {
      header: null
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
