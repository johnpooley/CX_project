import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import Button from '../components/Button';
import Logo from '../components/Logo';
import styles from '../styles/core-styles';

function Home(props) {
  const {navigation} = props;
  const text = `
  These gentle exercises are for everyone. They can help you to:


    • Strengthen muscles
    • Improve balance
    • Reduce falls
    • Stay active
    • Manage a health condition
    • Stay independent

  Check with your GP or health professional if you have any questions about the exercises.
  `

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>

          <Text style={styles.text}>
           {text}
          </Text>
          <Button onPress={() => navigation.navigate('Overview')} text="START"/>
          


          <Logo />

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
