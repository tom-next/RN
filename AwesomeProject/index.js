/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {createAppContainer} from 'react-navigation'
import {AppStackNavigator} from './react_navigation_demo/AppNavigators'
import SwitchNavigator from './react_navigation_demo/SwitchNavigator'
import {name as appName} from './app.json';

const AppStackNavigatorContainer = createAppContainer(SwitchNavigator)

AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
