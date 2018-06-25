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

class Yearly extends Component {
    
    render(){
        return(
            <Container>

        
            <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
            <Text> Yearly : Total for each year </Text>
            </Content>
        </Container>

        )
    }
}

export default Yearly;