import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button} from 'react-native';
import Home from '../screens/Home';
import Overview from '../screens/Overview';
import StartScreen from '../screens/Circuit/StartScreen';
import ExerciseScreen from '../screens/Circuit/ExerciseScreen';
import FinishPage from '../screens/Circuit/FinishPage';
import SelectedExercise from '../screens/ExerciseList/SelectedExercise';
import ExerciseList from '../screens/ExerciseList/ExerciseList';
import About from '../screens/About/About';
import Calander from '../screens/Circuit/MyProgress/Calander';
import MyProgress from '../screens/Circuit/MyProgress/MyProgress';
import MyWalks from '../screens/MyWalks/MyWalks';
import Questions from '../screens/Questions/Questions';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#232F84',

          },
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',


          },

          headerTintColor: 'white',
          headerBackTitleVisible: false
        }}
        headerMode='float'>

        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'HOME' }}
        />
        <Stack.Screen
          name='Overview'
          component={Overview}
          options={{ title: 'OVERVIEW' }}

        />
        <Stack.Screen
          name='AboutUs'
          component={About}
            options={{ title: 'ABOUT US' }}

        />
        <Stack.Screen
          name='MyWalks'
          component={MyWalks}
          options={{ title: 'MY WALKS' }}

        />
        <Stack.Screen
          name='Calander'
          component={Calander}
          options={{ title: 'MY PROGRESS' }}

        />
        <Stack.Screen
          name='MyProgress'
          component={MyProgress}
          options={{ title: 'MY PROGRESS' }}

        />
        <Stack.Screen
          name='Questions'
          component={Questions}
          options={{ title: 'QUESTIONS' }}

        />
        <Stack.Screen
          name='StartScreen'
          component={StartScreen}
          options={({ title: 'MY EXERCISES'})}

        />
        <Stack.Screen
          name='Exercises'
          component={ExerciseScreen}
          options={({ title: 'MY EXERCISES'})}

        />
        <Stack.Screen
          name='ExerciseList'
          component={ExerciseList}
          options={({ title: 'MY EXERCISES'})}
        />
        <Stack.Screen
          name='FinishPage'
          component={FinishPage}
              options={({ route }) => ({ title: 'FINISHED !'})}
          />
        <Stack.Screen
          name='SelectedExercise'
          component={SelectedExercise}
          options={({ route }) => ({ title: 'MY EXERCISES'})}

        />
      </Stack.Navigator>
    </NavigationContainer>

    </>
  );
};

export default MainStackNavigator;
