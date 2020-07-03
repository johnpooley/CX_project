import {  View, Text, TouchableOpacity, Image} from 'react-native';
import React, { Component } from 'react';
import styles from '../styles/exercise-styles'
import coreStyles from '../styles/core-styles'




function PaleButton(props){


  function renderImage(){
    if(props.image){
      return  <Image style={coreStyles.image} source={{uri: props.image}}/>

    }else if (props.localImage){
        return  <Image style={coreStyles.image} source={props.localImage}/>
    }else{
      return null
    }
  }


return(
    <View style={styles.buttonContainer}>
  <TouchableOpacity onPress={props.onPress}>


   {renderImage()}
     <Text style={styles.buttonText}> {props.text}</Text>

  </TouchableOpacity>
  </View>
)

}
export default PaleButton;
