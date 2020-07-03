import React from 'react';
import {ScrollView, SafeAreaView, View, Text, Image} from 'react-native';
import Button from '../../components/Button';
import exerciseStyles from '../../styles/exercise-styles';
import styles from '../../styles/core-styles';

function SelectedExercise(props) {
  const {route, navigation} = props;
  const exercise = route.params.data.item;
  const title = route.params.title;
  const steps = exercise.Steps;
  const images = exercise.url;
  const views = [];

  {
    /* this returns an element of the exercise text and picture to the views array*/
  }
  function list() {
    for (i = 0; i < steps.length; i++) {
      views.push(
        <View style={exerciseStyles.exerciseImageContainer}>
          <Text style={styles.text}>{steps[i]}</Text>
          <Image style={styles.image} source={{uri: images[i]}} />
        </View>,
      );
    }
  }

  list();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.titleBanner}>
            <Text style={exerciseStyles.text}>{title.toUpperCase()}</Text>
          </View>
          {views}
        </View>

        <Button onPress={() => navigation.navigate('Overview')} text="BACK" />

    </ScrollView>
  </SafeAreaView>
);
};

export default SelectedExercise;
