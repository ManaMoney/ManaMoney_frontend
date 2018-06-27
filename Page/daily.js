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
import Main from '../Components/addlog';


class Daily extends Component {
    
    render(){
        return(
            <Container>
            <Content>
             <Main/>
            </Content>
        </Container>

        )
    }
}

export default Daily;