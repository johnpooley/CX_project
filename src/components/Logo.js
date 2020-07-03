import {StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';
import styles from '../styles/core-styles'

function Logo(props){


return(

  <Image style={styles.logo}  source={require('../../assets/logo.png')} resizeMode="contain"/>

)

}
export default Logo;
