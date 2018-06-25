import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

//library imports 
import { Container, Content, Icon, Header, Body } from 'native-base';
import { createDrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation';

import SettingsScreen from './Page/SettingsScreen';
import HomeScreen from "./Page/HomeScreen";
import UserScreen from "./Page/UserScreen";

//WillMount may be remove in next version

export default class App extends Component {


  constructor() {
    super();
    this.state = {
      isReady: false,
      type:'',


      };
    }
    
      
  async componentWillMount(){
      await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
  });

  this.setState({ isReady: true });
  }

      


  render() {
      if (!this.state.isReady) {
         return <Expo.AppLoading />;
      }  
      return (
        <MyApp/>
        
        
    )
  }
}

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('./assets/DrawerIcons/user.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>

);

const MyApp = createDrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: HomeScreen,
  },
  User :{
    screen: UserScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
},


  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: 200,
  });


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white',
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },

});
