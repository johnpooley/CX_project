import React from 'react';
import { SafeAreaView, ScrollView, View, Text} from 'react-native';
import styles from '../../styles/core-styles'


function About() {
  const text =
  `Paths for All's vision is for a happier, healthier Scotland where physical activity improves quality of life and wellbeing for all.

  Our aim is to significantly increase the number of people who choose to walk in Scotland - whether that's leisure walking or active-choice walking to work, school or shops.

  We work to create more opportunities and better environments not just for walking, but also for cycling and other activities, to help make Scotland a more active, more prosperous, greener country.
  `
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <View style={styles.container}>

            <Text style={styles.text}>
              {text}
            </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};


export default About;
