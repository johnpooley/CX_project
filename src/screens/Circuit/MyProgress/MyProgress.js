import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import styles from '../../../styles/core-styles';
import Calander from './Calander.js'

function MyProgress(props) {

  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.container}>
    <Calander/>

        </View>

    </SafeAreaView>
  );
}

export default MyProgress;
