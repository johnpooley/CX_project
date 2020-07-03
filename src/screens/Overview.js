import React, {useState, useEffect} from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, Linking,} from 'react-native';
import firebase from '../Firebase';
import Button from '../components/Button';
import PaleButton from '../components/PaleButton';
import styles from '../styles/core-styles';
import connectRealm from '../connectRealm'

function Overview(props) {
  const {route, navigation} = props;

  function useExercises() {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
      firebase
        .firestore()
        .collection('exercises')
        .onSnapshot(snapshot => {
          const newExercises = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));

          setExercises(newExercises);
        });

    }, []);

    return exercises;

  }

  const exercises = useExercises();

  if (exercises.length < 1) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    )}

    else{

      return (
        <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleBanner}>
                  <Button  onPress={() =>   navigation.navigate('StartScreen', {data: exercises, count: -1})} text="START CIRCUIT"/>
        </View>
  <View style={styles.container}>
     <View style={styles.buttons}>
        <PaleButton  onPress={() =>   navigation.navigate('ExerciseList',{data:exercises})} text="EXERCISES" localImage={require('../images/exerciseIcon.png')} />
         <PaleButton  onPress={() =>   navigation.navigate('Calander', {workouts: props.workouts})} localImage={require('../images/progress.png')} text="MY PROGRESS"/>
         </View>
    <View style={styles.buttons}>
           <PaleButton  onPress={() =>    navigation.navigate('MyWalks')} localImage={require('../images/walks.png')} text="OUR WALKS"/>
           <PaleButton  onPress={() =>   navigation.navigate('Questions')} localImage={require('../images/questions.png')} text="QUESTIONS"/>
     </View>

         <Button  onPress={() =>   navigation.navigate('AboutUs')} text="ABOUT US"/>
</View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default connectRealm( Overview, {
  schemas: ['Workout'],
  mapToProps(results, realm, ownProps) {

    return {
      realm,

      workouts: results.workouts || [],

    };

  },


});
