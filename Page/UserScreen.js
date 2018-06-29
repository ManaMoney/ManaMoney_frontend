import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container, Content, Icon } from 'native-base';
import Login from '../Components/Login';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { Constants } from 'expo';

class UserScreen extends Component {

    render() {
        return (

            <Container style={styles.container} >

                <Login />
                
            </Container>
        )
    }

}

export default UserScreen

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    },
    container: {
        paddingTop: Constants.statusBarHeight,
    },
})