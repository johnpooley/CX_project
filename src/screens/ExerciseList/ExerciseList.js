import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, SectionList, SafeAreaView, ScrollView} from 'react-native';
import firebase from '../../Firebase';
import Button from '../../components/Button';
import PaleButton from '../../components/PaleButton';
import styles from '../../styles/core-styles';
import exerciseStyles from '../../styles/exercise-styles';


function ExerciseList(props) {
  const {route, navigation} = props;
  const exercises = route.params.data;


  function ListItem({exercise}) {
    return (

      <PaleButton
        onPress={() =>
          navigation.push('SelectedExercise', {
            title: exercise.item.title,
            data: exercise,
          })
        }
        text={exercise.item.title.toUpperCase()}
        image={exercise.item.url[1]}
      />

    );
  }

  if (exercises.length < 1) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.titleBanner}>
          <Button
            onPress={() =>
              navigation.navigate('StartScreen', {data: exercises, count: -1})
            }
            text="START CIRCUIT"
          />
        </View >

        <View style={styles.buttons}>
          <FlatList
            data={exercises}
            renderItem={exercise => <ListItem exercise={exercise} />}
             keyExtractor={(item, index) => index.toString()}

          />
        </View>


      </SafeAreaView>
    );
  }
}

export default ExerciseList;
