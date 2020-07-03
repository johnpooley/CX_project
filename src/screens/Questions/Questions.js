import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import firebase from '../../Firebase'
import styles from '../../styles/core-styles';
import Question from './Question'

function Overview(props) {
  const { route, navigation } = props




  function ListItem({ question }) {
    return(
        <Question title={question.item.title} description={question.item.description}/>

    )
  }
  function useQuestions() {
    const [questions, setQuestions] = useState([])

      useEffect(() => {
        firebase
        .firestore()
        .collection('faqs')
        .onSnapshot((snapshot) => {
          const newQuestions = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))

        setQuestions(newQuestions)
        })

      }, [])

      return questions;
  }


  const questions = useQuestions();

    if (questions.length < 1){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>
          Loading...
        </Text>
      </View>
    )}

    else{

      return (
        <SafeAreaView style={styles.container}>


  <View >
  <FlatList
    data={questions}
    renderItem={(question) => (
    <ListItem question={question}/>
    )}
     keyExtractor={(item, index) => index.toString()}
  />

        </View>

      </SafeAreaView>
      );
    }
  };



export default Overview;
