import React from 'react'
import realm from './realm';
import { RealmProvider } from 'react-native-realm';
import MainStackNavigator from './src/navigation/MainStackNavigator'

export default function App() {
  return(
  <RealmProvider realm={realm}>
  <MainStackNavigator />
</RealmProvider>
    )
};
