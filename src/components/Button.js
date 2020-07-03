
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';
import styles from '../styles/button-styles'
import coreStyles from '../styles/core-styles'



function Button(props){

function renderImage(){
  if(props.image){
    return  <Image style={coreStyles.image} source={{uri: props.image}}/>

  }else{
    return null;
  }
}

return(
  <>


  <TouchableOpacity onPress={props.onPress}>

  <View style={styles.buttonContainer}>
  <Text style={styles.buttonText}> {props.text}</Text>
   {renderImage()}


  </View>
  </TouchableOpacity>
  </>
)

}
export default Button;
