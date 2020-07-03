import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import {Agenda} from 'react-native-calendars';
import connectRealm from '../../../connectRealm';

export default class Calander extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:  {}  };




  }


componentDidMount(props) {

      this.setState({items: this.props.route.params.workouts})


  }



    render(){

    return (

      <Agenda
      items={this.state.items}
    loadItemsForMonth={this.loadItems.bind(this)}
    selected={new Date()}
    renderItem={this.renderItem.bind(this)}
    renderEmptyDate={this.renderEmptyDate.bind(this)}
    rowHasChanged={this.rowHasChanged.bind(this)}


        // markedDates={{
        //    '2017-05-08': {textColor: '#666'},
        //    '2017-05-09': {textColor: '#666'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
         // monthFormat={'yyyy'}
         // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

    loadItems(day) {
      if(this.state.items.length > 0){

      setTimeout(() => {



       let  newItems = {}

        for(let item in this.state.items){

            let workout = this.state.items[item]
            let date = workout.date
           if(date.length > 0){
             let name = []

             name.push(workout.note)

               let workoutDate = {[date]: name}
               Object.assign(newItems, workoutDate)
           }

           }
     console.log(newItems)

        if(newItems.length > 0){
        this.setState({
          items: newItems
        });
      }
      }, 1000);
    }
    }


  renderItem(item) {
      console.log(item)
    return (

      <View style={[styles.item]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

    timeToString(time) {
      const date = new Date(time);
      return date.toISOString().split('T')[0];
    }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
