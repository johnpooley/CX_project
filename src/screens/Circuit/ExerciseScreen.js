import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity} from 'react-native';
import Button from '../../components/Button';
import Exercise from './Exercise';
import styles from '../../styles/core-styles'
import buttonStyles from '../../styles/button-styles'


function ExerciseScreen(props){
  const { route, navigation } = props;
  const exercise = route.params;

  exercise.count ++;

  function nextExercise(){
    exercise.count == (exercise.data.length-1) ?
    navigation.navigate('FinishPage') : navigation.push('Exercises', {data: exercise.data, count: exercise.count})
  }

  function previousExercise(){
    if(exercise.count >=1){
       navigation.push('Exercises', {data: exercise.data, count: exercise.count-2})
      }
  }

  function previousButton(){
    if(exercise.count >= 1 ){
      return(
        <Button  onPress={() => {previousExercise()}} text="PREVIOUS"/>
      )
    }
  }


  return(

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Exercise exercise={exercise}/>
        <View style={buttonStyles.buttonWrapper}>
          <Button  onPress={() => {nextExercise()}} text="NEXT"/>
          {previousButton()}
        </View>
        </ScrollView>
    </SafeAreaView>
  );

};



export default ExerciseScreen;
