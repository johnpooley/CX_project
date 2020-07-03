import {View, Text, Image} from 'react-native';
import React, {Component} from 'react';
import exerciseStyles from '../../styles/exercise-styles';
import styles from '../../styles/core-styles';

function Exercise(props) {
  const exercise = props.exercise.data[props.exercise.count];
  const title = exercise.title;
  const steps = exercise.Steps;
  const images = exercise.url;
  const views = [];

  function list() {
    for (i = 0; i < steps.length; i++) {
      views.push(
        <View key={i} style={exerciseStyles.exerciseImageContainer}>
          <Text style={styles.text}>{steps[i]}</Text>
          <Image
            style={styles.image}
            source={{uri: images[i]}}
            resizeMode="contain"
          />
        </View>,
      );
    }
    return views;
  }

  return (
    <>
      <View style={styles.titleBanner}>
        <Text style={exerciseStyles.text}>{title.toUpperCase()}</Text>
      </View>
      <View>{list()}</View>
    </>
  );
}
export default Exercise;
