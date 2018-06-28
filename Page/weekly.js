import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

//library imports 
import { Container, Content, Icon, Header, Body } from 'native-base';
import Note from '../Components/note';

class Weekly extends Component {

    constructor(props){
      super(props);
      this.state ={ isLoading: true}
    }
  
      componentDidMount(){
        // check your wifi properties and use the IP to replace below
        // MAKE SURE your backend is running with the same IP as well
         fetch('http://192.168.31.126:8000/auth/login/', { 
              method : 'POST',
              headers : { 
                Accept : 'application/json',
                'Content-Type': 'application/json',
             },
              // include your superuser username and password
              body : JSON.stringify( { username: "admin",  password: "admin123" } )
            })
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              token :responseJson.token,
              
            }, function(){
              fetch('http://192.168.31.126:8000/transaction-list/',{
                method : 'GET',
                headers : {
                  Accept : 'application/json',
                'Content-Type': 'application/json',
                 Authorization : 'JWT ' + this.state.token
                }
                
              })
              .then( (response) => response.json() )
              .then( (responseJson)=>{
                this.setState({
                  isLoading: false,
                  dataSource : responseJson
                })
              } )
  
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      };
  
        
      
      
  
  
      
      render(){
  
        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator/>
            </View>
          )
        }
  
          return(
  
              <Container>
              <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
              <Text> Weekly : Total for each month </Text>
              <Text> huehue</Text>
              <FlatList
              data = { this.state.dataSource}
              renderItem={
  
                ({item}) => <Text>{item.transaction} : {item.amount}</Text>
                }
              keyExtractor={(item, index) => index}
            />
  
                  
              </Content>
          </Container>
  
          )
      }
  }
  
  export default Weekly;