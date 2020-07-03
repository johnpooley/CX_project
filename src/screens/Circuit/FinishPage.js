import {  SafeAreaView, ScrollView, View, Text } from 'react-native';
import Button from '../../components/Button';
import React from 'react';
import styles from '../../styles/core-styles';
import Rating from './Rating';


function FinishPage(props){

  const { navigation } = props;
  const text = `
Circuit is finished! Well Done!

It’s normal for muscles to ache slightly the next day.

Doing these exercises in addition to daily walks is a great way to stay active and feel good.

How did that workout go?`

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <View  style={styles.container}>

          <Text style={styles.text}>

            {text}
          </Text>

           <Rating navigation={navigation}/>


            </View>
            <Button  onPress={() => navigation.navigate('Home')} text="HOME"/>


      </ScrollView>
    </SafeAreaView>
  )
}


export default FinishPage;
