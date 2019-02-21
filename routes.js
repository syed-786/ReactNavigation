
import React, {Component} from 'react';
import {ScrollView,Platform, StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator, createAppContainer,DrawerItems} from "react-navigation";
import Home from './components/home';
import Details from './components/details';
import Settings from './components/setting';
import Docs from './components/docs';
import Gallery from './components/gallery';


// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
       
//       </View>
//     );
//   }
// }


const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: Home,
    },
    Details: {
      screen: Details,
    },
    Settings: {
        screen: Settings,
      },
      Docs: {
        screen: Docs,
      },
      Gallery: {
          screen : Gallery,
      }
  },
  {
      initialRouteName: "Home",
      drawerWidth: 250,
      //contentComponent:Details 
      //drawerType : "slide",
  }
  );
  
  export default  Navigator = createAppContainer(MyDrawerNavigator);