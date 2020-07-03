import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import styles from '../../styles/core-styles';

const WalkItemsDetail = props => {
  if (props.walkItems == null || props.walkItems.length === 0) {
    return <Text>Please Wait for Walks.</Text>;
  }


  const listItems = props.walkItems.walks_result.map(walk => {
    return (
      <View style={styles.text}>
        <Text>Walk location: {walk.WalkName}</Text>
        <Text>Project: {walk.WalkProject}</Text>
        <Text>Leader: {walk.Leader}</Text>
        <Text>Start Time: {walk.StartTime}</Text>
        <Text>Day: {walk.Day}</Text>
        <Text>Frequency: {walk.Frequency}</Text>
        <Text>Postcode: {walk.Postcode}</Text>
        <Text>---------</Text>
      </View>
    );
  });

  return <View style={styles.text}>{listItems}</View>;
};

export default WalkItemsDetail;
