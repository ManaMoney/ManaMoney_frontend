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
import Note from '../Components/note';
import notes from '../Components/addlog';
class Weekly extends Component {
    
    render(){
    
        return(
            <Container>
            <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
            <Text> Weekly : Total for each month </Text>
                
            </Content>
        </Container>

        )
    }
}

export default Weekly;