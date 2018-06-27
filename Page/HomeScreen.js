import React, { Component } from "react";
import { View, Text,TextInput, StyleSheet, Image,TouchableOpacity,Picker} from "react-native";
import {createStackNavigator,SafeAreaView} from 'react-navigation';
import { Icon,Container, } from 'native-base';
import { Card, FormLabel,} from "react-native-elements";

//custom components imports 
import CustomHeader from '../Components/CustomHeader';
import Tab from './TabNavigator';
import Main from '../Components/addlog';
import { Constants } from 'expo';

//var here to get araay

//the button in homescreen provide page for addlog. But not the function
//while the visible button on homepage did the function of input and showing the log on homescreen

class NotePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      noteArray: [],
      type:'Expenses',
      amount:'',
      category:'',
      details: '',


      };
    }

    addNote=()=>{
      if(this.state.amount){
          var d = new Date();
          this.state.noteArray.push({
              'date':d.getFullYear()+
              "/"+(d.getMonth()+1) +
              "/"+ d.getDate(),
              'type': this.state.type,
              'amount': this.state.amount,
              'category': this.state.category,
              'details': this.state.details,

          });
          this.setState({ noteArray: this.state.noteArray });
          this.setState({amount:''});
          this.setState({details:''});
      }
  }

  deleteNote(key){
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray});
}

  _submiting=()=>{
    this.props.navigation.navigate('Homes');
    this.addNote.bind(this);
//call function post data

  }

    
  render(){
      return(
        <View>
           <Card style={styles.input}>
  <Picker
  selectedValue={this.state.type}
  style={{ height: 50, width: 150 }}
  onValueChange={(itemValue, itemIndex) => this.setState({ type: itemValue })}>
  <Picker.Item label="Expenses" value="Expenses" />
  <Picker.Item label="Income" value="Income" />
  </Picker> 
    <FormLabel>Amount</FormLabel>
    <TextInput value={this.state.amount}
            keyboardType='numeric'
            placeholder="100.0"
            onChangeText= { (x) => this.setState({ amount: x}) } />
    <FormLabel>Category</FormLabel>
    <TextInput value={this.state.category}
            placeholder="Food/Tansport.."
            onChangeText= { (x) => this.setState({ category: x}) } />        
    
    <FormLabel>Details</FormLabel>
    <TextInput value={this.state.details}
            placeholder="tesco etc"
            onChangeText= { (x) => this.setState({ details: x}) } />
    <Text> </Text>
    <Text> </Text>
    

    <TouchableOpacity
            style={styles.btn2}
            onPress={this._submiting}
            >
            <Text
            style={styles.plus2}
            >SUBMIT</Text>
            </TouchableOpacity> 
  </Card>
   
        </View>
  
  
      )
    }
  }




class HomeScreen extends Component {
 


  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerIcon: 
        <Image
          source={require('../assets/DrawerIcons/home.png')}
          style={[styles.icon]}
        />
    
  })

  _click = () => {
    this.props.navigation.navigate('Note');
    
}

  render() {



  
    return (
      
      <Container style = {styles.container} >
        <SafeAreaView>
        <CustomHeader drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
        </SafeAreaView>
        <Tab/>
        
        <Text style={styles.brief} > Budget:   Expenses:    </Text>
      
      
      </Container>
      

    )
  }

}


export default Stack = createStackNavigator ({
  Homes : { screen : HomeScreen, },
  Note : { screen: NotePage, },
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
 
 );


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
},
  icon: {
    width: 24,
    height: 24,
  },
  btn:{
    position:'absolute',
    width:60,
    height:60,
    backgroundColor:'blue',
    borderRadius:30,
    bottom:20,
    right:20,
    alignItems:'center',
    justifyContent:'center'
},
plus:{
    fontSize:25,
    color:'white',
},
btn2:{
  position:'relative',
  alignItems:'center',
  justifyContent:'center',
  padding:10,
  bottom:10,
	backgroundColor: '#202646',
	borderRadius:5
},
plus2:{
  fontSize:15,
	color: '#ffffff',
	textAlign: 'center',
},
brief: {
  alignSelf: 'stretch',
  color: '#fff',
  padding: 20,
  backgroundColor: 'rgba(52, 52, 52, 0.8)',
  borderTopWidth:2,
  borderTopColor: '#ededed',
  bottom: 15,
},
input: {
  padding:10,
  maxWidth:5,
},
});

{/* <TouchableOpacity style={styles.btn}
            onPress={this._click}
            >
            <Text style = {styles.plus} >+</Text>
            </TouchableOpacity>  */}
