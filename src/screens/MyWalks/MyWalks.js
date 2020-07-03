import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  TextInput
} from 'react-native';
import Logo from '../../components/Logo';
import styles from '../../styles/core-styles';
import WalkItemsDetail from './MyWalkItems';

class MyWalks extends Component {
  constructor(props) {
    super(props);
    loading: true,
      (this.state = {
        walkItems: [],
      });
  }

  componentDidMount() {
    this.loadWalks();
  }

  loadWalks() {
    fetch('https://www.pfadatabase.org.uk/webpfa_x/getwalks.php')
      .then(res => res.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          walkItems: responseJson,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }



  render() {
    return (
      <ScrollView>
        <View style={styles.text}>
  <WalkItemsDetail />
        </View>

      </ScrollView>
    );
  }
}

export default MyWalks;
