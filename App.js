import React from 'react';
import { StyleSheet, Text, Button,  TouchableHighlight, View, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/Home';
import TambahScreen from './src/Tambah';
import CustemerScreen from './src/Custemer';



const RootStack = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    TambahScreen: {
      screen: TambahScreen,
    },
    CustemerScreen: {
      screen: CustemerScreen,
    },
  },
  {
    initialRouteName: 'HomeScreen',
  }
);
export default class App extends React.Component {
  render() {
    return (
    <RootStack />

    );
  }
}
