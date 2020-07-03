import React, {Component} from 'react';
import { SafeAreaView, ScrollView, View} from 'react-native';
import styles from '../../styles/core-styles';
import { AirbnbRating } from 'react-native-ratings';
import {connectRealm} from 'react-native-realm'


class Rating extends Component {

   constructor(props){
     super(props);
     this.state = {
       workout: "",
       date: "",

     };

this.ratingCompleted = this.ratingCompleted.bind(this)
this.addRating = this.addRating.bind(this)
 }


addRating = () => {
  const {realm} = this.props;
  realm.write(() => {
    realm.create('Workout',{
      date: this.state.date,
      note: this.state.workout
    })

  })
  


}


ratingCompleted(rating) {
  let date = new Date().toISOString().split('T')[0];
  let note = ("Workout complete! Rating: " + rating.toString())

this.addRating
   if(this.props.workouts){
  this.props.navigation.push('Calander', {workouts: this.props.workouts})
}


}






render(){

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <View style={styles.container}>


<AirbnbRating

showRating
 onFinishRating={this.ratingCompleted}/>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
}


export default connectRealm(Rating, {
  schemas: ['Workout'],
  mapToProps(results, realm, ownProps) {

    return {
      realm,

      workouts: results.workouts || [],

    };

  },


});
