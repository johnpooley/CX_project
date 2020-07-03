import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image} from 'react-native';
import Button from '../../components/Button';
import styles from '../../styles/core-styles'


function StartScreen(props) {
  const { route, navigation } = props
  const exercises= route.params.data;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <View style={styles.container}>

            <Text style={styles.textLeft}>
            For these exercises we recommend using:
            </Text>
             <View style={styles.alignSelf}>
               <Image style={styles.image} source={require('../../images/table.png')}/>
            <Text style={styles.text} > A sturdy table, </Text>
            </View>
            <View style={styles.alignSelf}>
          <Image style={styles.image} source={require('../../images/chair.png')}/>
            <Text style={styles.text} >   bench or chair, </Text>
            </View>
            <View style={styles.alignSelf}>

          <Image style={styles.image} source={require('../../images/wall.png')}/>

              <Text style={styles.text} >or  wall for support</Text>
              </View>




            <Button  onPress={() =>   navigation.navigate('Exercises', {data: exercises, count: -1})} text="OKAY"/>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default StartScreen;
