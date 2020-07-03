import React from 'react';
import { View, Text} from 'react-native';
import styles from '../../styles/core-styles'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";


function Question(props){

  { /*uses react component to render a collapseable question description*/ }

return(

      <View style={styles.container}>
      <Collapse>
          <CollapseHeader>

      <Text style={styles.titleBanner}> {props.title} </Text>

    </CollapseHeader>
    <CollapseBody>
      <Text style={styles.text}> {props.description} </Text>
      </CollapseBody>
    </Collapse>


    </View>
);
};

export default Question
