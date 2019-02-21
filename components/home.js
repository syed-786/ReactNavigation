
import React, {Component} from 'react';
import {Platform, StyleSheet,Button, Text, View} from 'react-native';
import {DrawerNavigator} from "react-navigation";


export default class Home extends Component {


  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('headerTitle', 'Home'),  //navigation.state.params.headerTitle

    //   headerStyle: {
    //     backgroundColor: 'lightblue',
    //     left:50
    //   },
    //   headerTintColor: 'tomato',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
     }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Home!</Text>
        {/* <Text style={styles.instructions}>To get started, edit App.js</Text> */}
       <Button onPress={()=>this.props.navigation.openDrawer()} title='Open Drawer' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
